import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  { path: '', redirectTo: 'list/servicios', pathMatch: 'full' },

  {
    path: 'list',
    loadComponent: () => import('./home/home.page').then(m => HomePage),
    children: [
      // 👇 Rutas específicas primero
      { path: 'perfil', loadComponent: () => import('./pages/perfil.page').then(m => m.PerfilPage) },
      { path: 'datos',  loadComponent: () => import('./pages/datos.page').then(m => m.DatosPage) },

      // 👇 Mantén tu comportamiento original: categorías por cards-list
      { path: ':cat', loadComponent: () => import('./pages/cards-list.page').then(m => m.CardsListPage) },

      { path: '', redirectTo: 'servicios', pathMatch: 'full' }
    ]
  },

  { path: '**', redirectTo: 'list/servicios' }
];

