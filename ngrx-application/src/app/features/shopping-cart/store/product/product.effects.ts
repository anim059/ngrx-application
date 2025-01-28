import * as productActions from './product.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { ProductService } from '../../services/product.service';

@Injectable()
export class ProductsEffects {
  private actions$ = inject(Actions);
  private productService = inject(ProductService);

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(productActions.productsLoad),
        exhaustMap(() => this.productService.getAllProducts()
          .pipe(
            map(products => ({ type: productActions.productsLoadedSuccess.type, products: (products) })),
            catchError((error: { message: string }) => of({ type: productActions.productsLoadedError.type, error: 'Fail to load' }))
          ))
    );
  });

  updateProductPrice$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(productActions.updateProductPrice),
        exhaustMap(({ productId, productPrice }) => 
          this.productService.updateProductPrice(productId, productPrice)
          .pipe(
            map(products => ({ type: '' })),
            catchError((error: { message: string }) => of({ type: productActions.productsLoadedError.type, error: 'Fail to load' }))
          ))
    );
  });
}