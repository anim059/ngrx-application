import { ProductMainPageComponent } from './features/shopping-cart/components/product-main-page/product-main-page.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'books',
    loadChildren: () =>
      import('./features/book-page/book-page.module').then((m) => m.BookPageModule),
  },
  {
    path: 'product',
    component: ProductMainPageComponent,
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('./features/shopping-cart/components/product-list/product-list.component').then(
            (m) => m.ProductListComponent
          ),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./features/shopping-cart/components/cart/cart.component').then(
            (m) => m.CartComponent
          ),
      }
    ]
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./features/shopping-cart/components/cart/cart.component').then((m) => m.CartComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'product/list',
  },
];
