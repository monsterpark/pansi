import { createFileRoute } from '@tanstack/react-router';
import { zodValidator } from '@tanstack/zod-adapter';
import z from 'zod/v4';

const organizationSearchSchema = z.object({
  currentPage: z.number().default(1),
  pageSize: z.number().default(20),
});

export const Route = createFileRoute('/libraries')({
  validateSearch: zodValidator(organizationSearchSchema),
});
