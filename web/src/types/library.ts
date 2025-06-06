import { z } from 'zod/v4';

export const LibrarySchema = z.object({
  id: z.int().optional(),
  path: z.string().min(1, { error: '路径至少一位' }),
  gallery_count: z.int().default(0).optional(),
  picture_count: z.int().default(0).optional(),
  video_count: z.int().default(0).optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
});

export type Library = z.infer<typeof LibrarySchema>;
