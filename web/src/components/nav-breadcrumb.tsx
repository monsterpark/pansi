import { useLocation } from '@tanstack/react-router';

import { allNavs } from './menu';

export default function NavBreadcrumb() {
  const location = useLocation();

  return allNavs.find((nav) => nav.path === location.pathname)?.title;
}
