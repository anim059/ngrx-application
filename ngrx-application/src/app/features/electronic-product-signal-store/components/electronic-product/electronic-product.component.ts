import { Component, OnInit, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

import { BookElectronicProductStore } from '../../store/electronic-product-store';
import { CommonModule } from '@angular/common';
import { IElectronicProduct } from '../../models/electronic-product';

@Component({
  selector: 'app-electronic-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './electronic-product.component.html',
  styleUrl: './electronic-product.component.css',
  providers: [BookElectronicProductStore]
})
export class ElectronicProductComponent implements OnInit {

  readonly store = inject(BookElectronicProductStore);

  searchInputField = new FormControl('');

  ngOnInit(): void {
    this.store.loadElectronicProducts();
    this.searchInputField.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe((value)=>{
      this.store.SearchElectronicProducts(value || '')
    })
  }

  getTheExtractedImage(product: IElectronicProduct): string {
    let url = '';
    let indexOfHttps = product.images[0].indexOf('https');
    let indexOfImageExt = product.images[0].indexOf('.jpeg') || product.images[0].indexOf('.jpg') || product.images[0].indexOf('.png');
    if (indexOfHttps !== -1 && indexOfImageExt !== -1) {
      url = product.images[0].slice(indexOfHttps, indexOfImageExt + 5);
      return url
    }
    return url;
  }

}
