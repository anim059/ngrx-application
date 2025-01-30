import { Injectable, inject } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { IElectronicProduct } from '../models/electronic-product';
import { IProduct } from '../../shopping-cart/models/product';

@Injectable({
  providedIn: 'root'})
export class ElectronicProductService {


  private http = inject(HttpClient)

  constructor() { }

  getElectronicProducts(): Promise<IElectronicProduct[]> {
    let url = 'https://api.escuelajs.co/api/v1/products/?categoryId=2';
    return firstValueFrom(this.http.get<IElectronicProduct[]>(url));
  }

  filterProducts(query: string): Promise<IElectronicProduct[]>{
    let url = `https://api.escuelajs.co/api/v1/products/?title=${query}&categoryId=2`;
    return firstValueFrom(this.http.get<IElectronicProduct[]>(url));
  }

}
