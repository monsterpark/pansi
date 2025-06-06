import {
  Aperture,
  ChartPie,
  House,
  Info,
  Library,
  Tags,
  UsersRound,
} from 'lucide-react';

import type { NavItem } from './nav';

/**
 * 主菜单
 */
export const mainNavs: NavItem[] = [
  {
    title: '首页',
    path: '/',
    icon: House,
  },
  {
    title: '写真',
    path: '/galleries',
    icon: Aperture,
  },
  {
    title: '模特',
    path: '/performers',
    icon: UsersRound,
  },
  {
    title: '标签',
    path: '/tags',
    icon: Tags,
  },
];

/**
 * 系统设置菜单
 */
export const settingNavs: NavItem[] = [
  {
    title: '统计',
    path: '/stats',
    icon: ChartPie,
  },
  {
    title: '收藏库',
    path: '/libraries',
    icon: Library,
  },
  {
    title: '关于',
    path: '/about',
    icon: Info,
  },
];

/**
 * 所有菜单
 */
export const allNavs = [...mainNavs, ...settingNavs];
