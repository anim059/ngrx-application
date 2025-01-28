import * as cartActions from '../../store/cart/cart.actions';
import * as cartSelectors from '../../store/cart/cart.selectors';

import { Component, OnInit, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/product';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  store = inject(Store);

  product$ !: Observable<IProduct[]>;

  error$ !: Observable<string[]>;

  ngOnInit(): void {
    this.product$ = this.store.select(cartSelectors.allCartProducts);
  }

  deleteProduct(product: IProduct) {
    this.store.dispatch(cartActions.removeProductFromCart({ productId: product.id }));
  }

}

