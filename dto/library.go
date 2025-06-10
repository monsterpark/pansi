package dto

import "github.com/dromara/carbon/v2"

type Library struct {
	ID           int64           `json:"id"`
	Path         string          `json:"path"`
	GalleryCount int             `json:"gallery_count"`
	ImageCount   int             `json:"image_count"`
	VideoCount   int             `json:"video_count"`
	CreatedAt    carbon.DateTime `json:"created_at"`
	UpdatedAt    carbon.DateTime `json:"updated_at"`
}

type LibraryCreate struct {
	Path string `json:"path"`
}

type LibraryUpdate struct {
	ID   int64  `json:"id"`
	Path string `json:"path"`
}

type LibraryDelete struct {
	IDs []int64 `json:"ids"`
}
