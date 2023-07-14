import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
