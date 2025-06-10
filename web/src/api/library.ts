import { api } from '@/lib/api';
import type { ResponseWithList } from '@/types/api';
import type { Library, LibraryCreate } from '@/types/library';

export const getLibraries = async (params: object) =>
  api.get<ResponseWithList<Library>>('/libraries', { params });

export const createLibrary = async (data: LibraryCreate) =>
  api.post<Response>('/libraries/create', data);
