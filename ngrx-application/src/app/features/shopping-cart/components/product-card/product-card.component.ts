import * as cartActions from '../../store/cart/cart.actions';
import * as productActions from '../../store/product/product.actions';

import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { IProduct } from '../../models/product';
import { MatIcon } from '@angular/material/icon';
import { Store } from '@ngrx/store';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [MatIcon, FormsModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnChanges {

  @Input() productInput !: IProduct;

  store = inject(Store);

  productInfo !: IProduct;

  isPriceEditable = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.productInfo = { ...changes['productInput'].currentValue };
    this.productInfo.images = this.productInfo.images.map((image) => {
      let url = '';
      let indexOfHttps = image.indexOf('https');
      let indexOfImageExt = image.indexOf('.jpeg') || image.indexOf('.jpg') || image.indexOf('.png');
      if (indexOfHttps !== -1 && indexOfImageExt !== -1) {
        url = image.slice(indexOfHttps, indexOfImageExt + 5);
        return url
      }
      return url
    })
  }

  addToCart(product: IProduct) {
    this.store.dispatch(cartActions.addProductToCart({ product }));
  }

  updatePrice(productId: number, productPrice: number) {
    this.isPriceEditable = false;
    this.store.dispatch(productActions.updateProductPrice({ productId, productPrice }));
  }
}
