import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/performers')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/performers"!</div>;
}
