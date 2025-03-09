import { ServerRoute, RenderMode } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Client, // Use static rendering for the root route
  },
  {
    path: 'task/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: () => Promise.resolve([]),
  }
];
