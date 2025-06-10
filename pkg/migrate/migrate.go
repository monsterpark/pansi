package migrate

import (
	"io/fs"
	"net/url"

	"github.com/amacneil/dbmate/v2/pkg/dbmate"
	_ "github.com/amacneil/dbmate/v2/pkg/driver/sqlite"
	"goyave.dev/goyave/v5/util/errors"
)

func Migrate(dsn string, fs fs.FS) error {
	u, err := url.Parse(dsn)
	if err != nil {
		return errors.New(err)
	}

	db := dbmate.New(u)
	db.FS = fs
	db.MigrationsDir = []string{"database/migrations"}

	err = db.CreateAndMigrate()

	return errors.New(err)
}
