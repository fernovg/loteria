import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: '',
        loadComponent: () =>
          import('../pages/loteria/loteria.page').then((m) => m.LoteriaPage),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'loteria',
    pathMatch: 'full',
  },
];
