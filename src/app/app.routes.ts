import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    title: 'Home',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/home-page.component').then(m => m.HomePageComponent),
  },
  {
    path: 'info',
    title: 'Info',
    loadComponent: () =>
      import('./pages/info-page.component').then(m => m.InfoPageComponent),
  },
  {
    path: 'portfolio',
    title: 'Portfolio',
    loadComponent: () =>
      import('./pages/portfolio-page.component').then(
        m => m.PortfolioPageComponent,
      ),
  },
  {
    path: 'about',
    title: 'About',
    loadComponent: () =>
      import('./pages/about-page.component').then(m => m.AboutPageComponent),
  },
  {
    path: 'contacts',
    title: 'Contacts',
    loadComponent: () =>
      import('./pages/contacts-page.component').then(
        m => m.ContactsPageComponent,
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./core/empty/empty.component').then(m => m.EmptyComponent),
  },
];
