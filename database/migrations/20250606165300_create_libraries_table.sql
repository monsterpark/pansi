-- migrate:up
CREATE TABLE libraries (
    `id` INTEGER PRIMARY KEY AUTOINCREMENT,
    `path` TEXT NOT NULL,
    `gallery_count` INTEGER DEFAULT 0,
    `image_count` INTEGER DEFAULT 0,
    `video_count` INTEGER DEFAULT 0,
    `created_at` TIMESTAMP,
    `updated_at` TIMESTAMP
);
CREATE UNIQUE INDEX "libraries_path" ON "libraries" ("path");

-- migrate:down
DROP TABLE IF EXISTS libraries;
