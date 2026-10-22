import { Routes } from '@angular/router';
import { PageA } from './pages/page-a/page-a';
import { PageB } from './pages/page-b/page-b';
import { Details } from './pages/page-a/details/details';

export const routes: Routes = [
  {
    path:'',
    redirectTo: 'page-a',
    pathMatch: 'full'
  },
  {
    path: 'page-a',
    component: PageA,
    children: [
      {
        path: 'details',
        component: Details
      }
    ]
  },
  {
    path: 'page-b',
    loadComponent: () => import('./pages/page-b/page-b').then((m) => m.PageB)
  }
];
