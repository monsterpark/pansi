package library

import (
	"context"
	"net/http"

	"github.com/monsterpark/pansi/dto"
	"github.com/monsterpark/pansi/service"
	"goyave.dev/filter"
	"goyave.dev/goyave/v5"
	"goyave.dev/goyave/v5/database"
	"goyave.dev/goyave/v5/util/typeutil"
)

type Service interface {
	Index(ctx context.Context, request *filter.Request) (*database.PaginatorDTO[*dto.Library], error)
	Create(ctx context.Context, dtoRecord *dto.LibraryCreate) error
	Update(ctx context.Context, dtoRecord *dto.LibraryUpdate) error
	Delete(ctx context.Context, dtoRecord *dto.LibraryDelete) error
}

type Controller struct {
	goyave.Component
	service Service
}

func (co *Controller) Init(server *goyave.Server) {
	co.service = server.Service(service.Library).(Service)
	co.Component.Init(server)
}

func (co *Controller) RegisterRoutes(router *goyave.Router) {
	subrouter := router.Subrouter("/libraries")

	subrouter.Get("/", co.Index).ValidateQuery(filter.Validation)
	subrouter.Post("/create", co.Create).ValidateBody(CreateRequest)
	subrouter.Post("/update", co.Update).ValidateBody(UpdateRequest)
	subrouter.Post("/delete", co.Delete).ValidateBody(DeleteRequest)
}

func (co *Controller) Index(response *goyave.Response, request *goyave.Request) {
	paginator, err := co.service.Index(request.Context(), filter.NewRequest(request.Query))
	if err != nil {
		response.JSON(http.StatusBadRequest, dto.Response{Message: err.Error()})
		return
	}

	response.JSON(http.StatusOK, dto.Response{
		Message: "success",
		Data:    paginator,
	})
}

func (co *Controller) Create(response *goyave.Response, request *goyave.Request) {
	dtoRecord, err := typeutil.Convert[*dto.LibraryCreate](request.Data)
	if err != nil {
		response.JSON(http.StatusBadRequest, dto.Response{
			Message: err.Error(),
		})
		return
	}

	co.Server().Logger.Info("dtoRecord", "value", dtoRecord)
	err = co.service.Create(request.Context(), dtoRecord)
	if err != nil {
		response.JSON(http.StatusInternalServerError, dto.Response{
			Message: err.Error(),
		})
		return
	}

	response.JSON(http.StatusCreated, dto.ResponseSuccess)
}

func (co *Controller) Update(response *goyave.Response, request *goyave.Request) {
	dtoRecord, err := typeutil.Convert[*dto.LibraryUpdate](request.Data)
	if err != nil {
		response.JSON(http.StatusBadRequest, dto.Response{
			Message: err.Error(),
		})
		return
	}

	err = co.service.Update(request.Context(), dtoRecord)
	if err != nil {
		response.JSON(http.StatusInternalServerError, dto.Response{
			Message: err.Error(),
		})
		return
	}

	response.JSON(http.StatusOK, dto.ResponseSuccess)
}

func (co *Controller) Delete(response *goyave.Response, request *goyave.Request) {
	dtoRecord, err := typeutil.Convert[*dto.LibraryDelete](request.Data)
	if err != nil {
		response.JSON(http.StatusBadRequest, dto.Response{
			Message: err.Error(),
		})
		return
	}

	err = co.service.Delete(request.Context(), dtoRecord)
	if err != nil {
		response.JSON(http.StatusInternalServerError, dto.Response{
			Message: err.Error(),
		})
		return
	}

	response.JSON(http.StatusNoContent, dto.ResponseSuccess)
}
