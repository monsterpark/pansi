import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/stats')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/stats"!</div>;
}
