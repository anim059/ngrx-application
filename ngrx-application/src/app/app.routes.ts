import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'books',
        loadChildren: () =>
          import('./features/book-page/book-page.module').then((m) => m.BookPageModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'books',
      },
];
