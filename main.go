package main

import (
	"embed"
	"fmt"
	"os"

	"github.com/monsterpark/pansi/database/repository"
	"github.com/monsterpark/pansi/http/route"
	"github.com/monsterpark/pansi/pkg/migrate"
	"github.com/monsterpark/pansi/service/library"

	"goyave.dev/filter"
	"goyave.dev/goyave/v5"
	"goyave.dev/goyave/v5/util/errors"
	"goyave.dev/goyave/v5/util/fsutil"

	_ "goyave.dev/goyave/v5/database/dialect/sqlite"
)

//go:embed resources
var resources embed.FS

//go:embed database/migrations/*.sql
var migrations embed.FS

func main() {
	resources := fsutil.NewEmbed(resources)
	langFS, err := resources.Sub("resources/lang")
	if err != nil {
		fmt.Fprintln(os.Stderr, err.(*errors.Error).String())
		os.Exit(1)
	}

	opts := goyave.Options{
		LangFS: langFS,
	}

	server, err := goyave.New(opts)
	if err != nil {
		fmt.Fprintln(os.Stderr, err.(*errors.Error).String())
		os.Exit(1)
	}

	server.Logger.Info("Registering hooks")
	server.RegisterSignalHook()

	server.RegisterStartupHook(func(s *goyave.Server) {
		filter.QueryParamPage = "currentPage"
		filter.QueryParamPerPage = "pageSize"

		server.Logger.Info("Migrate database tables ...")
		err := migrate.Migrate(
			fmt.Sprintf("sqlite:%s", server.Config().GetString("database.name")),
			migrations,
		)
		if err != nil {
			server.Logger.Error(err)
			os.Exit(3)
		}
		server.Logger.Info("Migrate database tables success")

		server.Logger.Info("Server is listening", "host", s.Host())
	})

	server.RegisterShutdownHook(func(s *goyave.Server) {
		s.Logger.Info("Server is shutting down")
	})

	registerServices(server)

	server.Logger.Info("Registering routes")
	server.RegisterRoutes(route.Register)

	if err := server.Start(); err != nil {
		server.Logger.Error(err)
		os.Exit(2)
	}
}

func registerServices(server *goyave.Server) {
	server.Logger.Info("Registering services")

	// Services represent the Domain/Business layer.
	// This is where the core logic and value of your application resides.
	// This function is where you will register your services in the server's
	// service container to make them accessible to dependents.
	// https://goyave.dev/basics/services.html#service-container

	libraryRepository := repository.NewLibrary(server.DB())
	libraryService := library.NewService(libraryRepository)
	server.RegisterService(libraryService)
}
