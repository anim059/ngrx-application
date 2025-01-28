import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductHeaderComponent } from '../product-header/product-header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-main-page',
  standalone: true,
  imports: [CommonModule, ProductHeaderComponent, RouterModule],
  templateUrl: './product-main-page.component.html',
  styleUrl: './product-main-page.component.css'
})
export class ProductMainPageComponent {

}
