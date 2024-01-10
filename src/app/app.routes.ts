import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'calculadora',
    loadComponent: () => import('./calculadora/calculadora.page').then( m => m.CalculadoraPage)
  },
];
