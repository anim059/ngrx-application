import * as cartSelectors from '../../store/cart/cart.selectors';
import * as productActions from '../../store/product/product.actions';
import * as productSelectors from '../../store/product/product.selectors';

import { Component, OnInit, inject, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/product';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  store = inject(Store);

  product$ !: Observable<IProduct[]>;

  error$ !: Observable<string[]>;

  loading$ !: Observable<boolean>;

  isContentLoaded = signal<boolean>(false);

  ngOnInit(): void {
    this.store.dispatch(productActions.productsLoad());
    this.product$ = this.store.select(productSelectors.allProducts);
    this.loading$ = this.store.select(cartSelectors.productLoadingStatus);
    setTimeout(() => this.isContentLoaded.set(true), 2000);
  }


}
