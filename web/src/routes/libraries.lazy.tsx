import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/libraries')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/libraries"!</div>;
}
