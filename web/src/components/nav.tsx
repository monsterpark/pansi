import {
  type FileRoutesByPath,
  Link,
  useLocation,
} from '@tanstack/react-router';
import { type LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

export type NavItem = {
  title: string;
  path: keyof FileRoutesByPath;
  icon: LucideIcon;
};

type NavProps = {
  /**
   * 菜单
   */
  items: NavItem[];
  /**
   * 分组标题
   */
  groupLabel?: ReactNode;
};

export function Nav({ items, groupLabel }: NavProps) {
  const location = useLocation();

  return (
    <SidebarGroup>
      {groupLabel ? <SidebarGroupLabel>{groupLabel}</SidebarGroupLabel> : null}
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.path}>
            <SidebarMenuButton
              asChild
              tooltip={item.title}
              isActive={location.pathname === item.path}
            >
              <Link to={item.path}>
                <item.icon />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
