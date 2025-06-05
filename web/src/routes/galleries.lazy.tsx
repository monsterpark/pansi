import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/galleries')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/galleries"!</div>;
}
