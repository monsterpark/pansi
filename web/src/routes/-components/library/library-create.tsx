import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CirclePlus, Loader } from 'lucide-react';
import { useCallback, useState } from 'react';

import { createLibrary } from '@/api/library';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppForm } from '@/components/ui/tanstack-form';
import { type Library, LibrarySchema } from '@/types/library';

export default function LibraryCreate({
  defaultValues,
}: {
  defaultValues?: Library;
}) {
  const [clicked, setClicked] = useState(false);
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: ['libraries', 'create'],
    mutationFn: createLibrary,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['libraries'] });
      setClicked(false);
    },
  });
  const form = useAppForm({
    validators: { onChange: LibrarySchema },
    defaultValues: defaultValues ?? { path: '' },
    onSubmit: ({ value }) => mutate(value),
  });

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      e.stopPropagation();
      form.handleSubmit();
    },
    [form],
  );

  if (!clicked) {
    return (
      <div className='flex justify-end'>
        <Button size='sm' onClick={() => setClicked(true)}>
          <CirclePlus />
          新增
        </Button>
      </div>
    );
  }

  return (
    <form.AppForm>
      <form
        className='flex justify-end items-center gap-2'
        onSubmit={handleSubmit}
      >
        <form.AppField
          name='id'
          children={(field) => (
            <field.FormItem className='flex' hidden></field.FormItem>
          )}
        />
        <form.AppField
          name='path'
          children={(field) => (
            <field.FormItem>
              <field.FormMessage />
              <field.FormControl>
                <Input
                  placeholder='输入路径'
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                />
              </field.FormControl>
            </field.FormItem>
          )}
        />
        <Button
          variant='outline'
          onClick={() => {
            form.reset({ path: '', id: undefined });
            setClicked(false);
          }}
        >
          取消
        </Button>
        <Button type='submit' size='sm' disabled={isPending}>
          {isPending ? <Loader className='animate-spin' /> : <CirclePlus />}
          确定
        </Button>
      </form>
    </form.AppForm>
  );
}
