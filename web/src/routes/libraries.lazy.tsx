import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { createLazyFileRoute } from '@tanstack/react-router';
import { Pencil, Trash } from 'lucide-react';

import { getLibraries } from '@/api/library';
import Loading from '@/components/loading';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import LibraryCreate from './-components/library/library-create';

export const Route = createLazyFileRoute('/libraries')({
  component: RouteComponent,
});

function RouteComponent() {
  const searchParams = Route.useSearch();
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['libraries', searchParams],
    queryFn: () => getLibraries(searchParams),
    select: (data) => data.data.data,
    placeholderData: keepPreviousData,
  });

  return (
    <div className='flex justify-center'>
      <div className='max-w-3xl w-full space-y-4'>
        <LibraryCreate />
        <Loading isLoading={isLoading || isFetching}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>路径</TableHead>
                <TableHead>图集数量</TableHead>
                <TableHead>图片数量</TableHead>
                <TableHead>视频数量</TableHead>
                <TableHead className='text-right'>操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.records.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className='font-medium'>{item.path}</TableCell>
                  <TableCell>{item.gallery_count}</TableCell>
                  <TableCell>{item.image_count}</TableCell>
                  <TableCell>{item.video_count}</TableCell>
                  <TableCell className='text-right'>
                    <Button size='sm' variant='ghost'>
                      <Pencil />
                    </Button>
                    <Button size='sm' variant='ghost'>
                      <Trash />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Loading>
      </div>
    </div>
  );
}
