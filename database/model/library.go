package model

import "github.com/dromara/carbon/v2"

type Library struct {
	ID           int64           `json:"id" gorm:"column:id"`
	Path         string          `json:"path" gorm:"column:path"`
	GalleryCount int             `json:"gallery_count" gorm:"column:gallery_count"`
	ImageCount   int             `json:"image_count" gorm:"column:image_count"`
	VideoCount   int             `json:"video_count" gorm:"column:video_count"`
	CreatedAt    carbon.DateTime `json:"created_at" gorm:"column:created_at;autoCreateTime"`
	UpdatedAt    carbon.DateTime `json:"updated_at" gorm:"column:updated_at;autoUpdateTime"`
}

func (*Library) Tablename() string {
	return "libraries"
}
