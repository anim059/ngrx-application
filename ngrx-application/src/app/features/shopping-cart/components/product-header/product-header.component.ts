import * as cartSelectors from '../../store/cart/cart.selectors';

import { Component, Input, OnInit, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'product-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-header.component.html',
  styleUrl: './product-header.component.css'
})
export class ProductHeaderComponent implements OnInit {

  totalCartItemCount$ !: Observable<number>;

  store = inject(Store);

  ngOnInit(): void {
    this.totalCartItemCount$ = this.store.select(cartSelectors.totalCartProducts);
  }
  
}
