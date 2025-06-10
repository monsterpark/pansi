package library

import (
	"context"
	"log/slog"

	"github.com/monsterpark/pansi/database/model"
	"github.com/monsterpark/pansi/dto"
	"github.com/monsterpark/pansi/service"
	"goyave.dev/filter"
	"goyave.dev/goyave/v5/database"
	"goyave.dev/goyave/v5/util/errors"
	"goyave.dev/goyave/v5/util/typeutil"
)

type Repository interface {
	Index(ctx context.Context, request *filter.Request) (*database.Paginator[*model.Library], error)
	Create(ctx context.Context, modelRecord *model.Library) error
	Update(ctx context.Context, modelRecord *model.Library) error
	Delete(ctx context.Context, ids []int64) error
}

type Service struct {
	repository Repository
}

func NewService(repository Repository) *Service {
	return &Service{
		repository: repository,
	}
}

func (se *Service) Index(ctx context.Context, request *filter.Request) (*database.PaginatorDTO[*dto.Library], error) {
	paginator, err := se.repository.Index(ctx, request)

	return typeutil.MustConvert[*database.PaginatorDTO[*dto.Library]](paginator), errors.New(err)
}

func (se *Service) Create(ctx context.Context, dtoRecord *dto.LibraryCreate) error {
	modelRecord := typeutil.Copy(&model.Library{}, dtoRecord)
	slog.Info("print model", "modelRecord", modelRecord)
	err := se.repository.Create(ctx, modelRecord)

	return errors.New(err)
}

func (se *Service) Update(ctx context.Context, dtoRecord *dto.LibraryUpdate) error {
	modelRecord := typeutil.Copy(&model.Library{}, dtoRecord)
	err := se.repository.Update(ctx, modelRecord)

	return errors.New(err)
}

func (se *Service) Delete(ctx context.Context, dtoRecord *dto.LibraryDelete) error {
	err := se.repository.Delete(ctx, dtoRecord.IDs)

	return errors.New(err)
}

func (se *Service) Name() string {
	return service.Library
}
