import { Routes } from '@angular/router';
import { PageA } from './components/page-a/page-a';
import { PageB } from './components/page-b/page-b';

export const routes: Routes = [
  {
    path:'',
    redirectTo: 'page-a',
    pathMatch: 'full'
  },
  {
    path: 'page-a',
    component: PageA
  },
  {
    path: 'page-b',
    loadComponent: () => import('./components/page-b/page-b').then((m) => m.PageB)
  }
];
