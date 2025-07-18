/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LibrariesImport } from './routes/libraries'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const TagsLazyImport = createFileRoute('/tags')()
const StatsLazyImport = createFileRoute('/stats')()
const PerformersLazyImport = createFileRoute('/performers')()
const GalleriesLazyImport = createFileRoute('/galleries')()
const AboutLazyImport = createFileRoute('/about')()

// Create/Update Routes

const TagsLazyRoute = TagsLazyImport.update({
  id: '/tags',
  path: '/tags',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/tags.lazy').then((d) => d.Route))

const StatsLazyRoute = StatsLazyImport.update({
  id: '/stats',
  path: '/stats',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/stats.lazy').then((d) => d.Route))

const PerformersLazyRoute = PerformersLazyImport.update({
  id: '/performers',
  path: '/performers',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/performers.lazy').then((d) => d.Route))

const GalleriesLazyRoute = GalleriesLazyImport.update({
  id: '/galleries',
  path: '/galleries',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/galleries.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const LibrariesRoute = LibrariesImport.update({
  id: '/libraries',
  path: '/libraries',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/libraries.lazy').then((d) => d.Route))

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/libraries': {
      id: '/libraries'
      path: '/libraries'
      fullPath: '/libraries'
      preLoaderRoute: typeof LibrariesImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/galleries': {
      id: '/galleries'
      path: '/galleries'
      fullPath: '/galleries'
      preLoaderRoute: typeof GalleriesLazyImport
      parentRoute: typeof rootRoute
    }
    '/performers': {
      id: '/performers'
      path: '/performers'
      fullPath: '/performers'
      preLoaderRoute: typeof PerformersLazyImport
      parentRoute: typeof rootRoute
    }
    '/stats': {
      id: '/stats'
      path: '/stats'
      fullPath: '/stats'
      preLoaderRoute: typeof StatsLazyImport
      parentRoute: typeof rootRoute
    }
    '/tags': {
      id: '/tags'
      path: '/tags'
      fullPath: '/tags'
      preLoaderRoute: typeof TagsLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/libraries': typeof LibrariesRoute
  '/about': typeof AboutLazyRoute
  '/galleries': typeof GalleriesLazyRoute
  '/performers': typeof PerformersLazyRoute
  '/stats': typeof StatsLazyRoute
  '/tags': typeof TagsLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/libraries': typeof LibrariesRoute
  '/about': typeof AboutLazyRoute
  '/galleries': typeof GalleriesLazyRoute
  '/performers': typeof PerformersLazyRoute
  '/stats': typeof StatsLazyRoute
  '/tags': typeof TagsLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/libraries': typeof LibrariesRoute
  '/about': typeof AboutLazyRoute
  '/galleries': typeof GalleriesLazyRoute
  '/performers': typeof PerformersLazyRoute
  '/stats': typeof StatsLazyRoute
  '/tags': typeof TagsLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/libraries'
    | '/about'
    | '/galleries'
    | '/performers'
    | '/stats'
    | '/tags'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/libraries'
    | '/about'
    | '/galleries'
    | '/performers'
    | '/stats'
    | '/tags'
  id:
    | '__root__'
    | '/'
    | '/libraries'
    | '/about'
    | '/galleries'
    | '/performers'
    | '/stats'
    | '/tags'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LibrariesRoute: typeof LibrariesRoute
  AboutLazyRoute: typeof AboutLazyRoute
  GalleriesLazyRoute: typeof GalleriesLazyRoute
  PerformersLazyRoute: typeof PerformersLazyRoute
  StatsLazyRoute: typeof StatsLazyRoute
  TagsLazyRoute: typeof TagsLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LibrariesRoute: LibrariesRoute,
  AboutLazyRoute: AboutLazyRoute,
  GalleriesLazyRoute: GalleriesLazyRoute,
  PerformersLazyRoute: PerformersLazyRoute,
  StatsLazyRoute: StatsLazyRoute,
  TagsLazyRoute: TagsLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/libraries",
        "/about",
        "/galleries",
        "/performers",
        "/stats",
        "/tags"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/libraries": {
      "filePath": "libraries.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/galleries": {
      "filePath": "galleries.lazy.tsx"
    },
    "/performers": {
      "filePath": "performers.lazy.tsx"
    },
    "/stats": {
      "filePath": "stats.lazy.tsx"
    },
    "/tags": {
      "filePath": "tags.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
