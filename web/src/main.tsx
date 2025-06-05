import './index.css';

import { createRouter, RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { TanstackQueryProvider } from './provider/tanstack-query';
import { ThemeProvider } from './provider/theme-provider';
// Import the generated route tree
import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='system'>
      <TanstackQueryProvider>
        <RouterProvider router={router} />
      </TanstackQueryProvider>
    </ThemeProvider>
  </StrictMode>,
);
