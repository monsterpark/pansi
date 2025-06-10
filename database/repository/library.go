package repository

import (
	"context"

	"github.com/monsterpark/pansi/database/model"
	"gorm.io/gorm"
	"goyave.dev/filter"
	"goyave.dev/goyave/v5/database"
	"goyave.dev/goyave/v5/util/errors"
)

type Library struct {
	db *gorm.DB
}

func NewLibrary(db *gorm.DB) *Library {
	return &Library{
		db: db,
	}
}

func (li *Library) Index(ctx context.Context, request *filter.Request) (*database.Paginator[*model.Library], error) {
	libraries := []*model.Library{}

	paginator, err := filter.Scope(li.db, request, &libraries)

	return paginator, errors.New(err)
}

func (li *Library) Create(ctx context.Context, modelRecord *model.Library) error {
	db := li.db.WithContext(ctx).Create(modelRecord)

	return errors.New(db.Error)
}

func (li *Library) Update(ctx context.Context, modelRecord *model.Library) error {
	db := li.db.WithContext(ctx).
		Where("id = ?", modelRecord.ID).
		Update("path", modelRecord.Path)

	return errors.New(db.Error)
}

func (li *Library) Delete(ctx context.Context, ids []int64) error {
	libraries := []*model.Library{}
	db := li.db.WithContext(ctx).Delete(&libraries, ids)

	return errors.New(db.Error)
}
