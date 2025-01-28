import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient)

  constructor() { }

  getAllProducts(): Observable<IProduct[]> {
    let url = 'https://api.escuelajs.co/api/v1/products';
    return this.http.get<IProduct[]>(url);
  }

  updateProductPrice(productId: number, productPrice: number): Observable<IProduct[]> {
    let url = `https://api.escuelajs.co/api/v1/products/${productId }`;
    return this.http.put<IProduct[]>(url, { price: productPrice });
  }

}
