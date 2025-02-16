import { Component, OnInit, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

import { BookElectronicProductStore } from '../../store/electronic-product-store';
import { CommonModule } from '@angular/common';
import { IElectronicProduct } from '../../models/electronic-product';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-electronic-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatSelectModule, MatIconModule],
  templateUrl: './electronic-product.component.html',
  styleUrl: './electronic-product.component.css',
  providers: [BookElectronicProductStore]
})
export class ElectronicProductComponent implements OnInit {

  // selected = new FormControl('', [Validators.required]);

  // selectFormControl = new FormControl('', [Validators.required]);

  // nativeSelectFormControl = new FormControl('', [
  //   Validators.required
  // ]);

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
