import { z } from 'zod/v4';

export const LibrarySchema = z.object({
  id: z.int().optional(),
  path: z.string({ error: '请输入路径' }),
  gallery_count: z.int().default(0).optional(),
  image_count: z.int().default(0).optional(),
  video_count: z.int().default(0).optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
});

export type Library = z.infer<typeof LibrarySchema>;

export type LibraryCreate = Pick<Library, 'path'>;

export type LibraryUpdate = Pick<Library, 'path' | 'id'>;
