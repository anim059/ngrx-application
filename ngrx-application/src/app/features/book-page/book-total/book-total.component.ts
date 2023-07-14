import { Component, Input } from '@angular/core';

@Component({
  selector: 'book-total',
  templateUrl: './book-total.component.html',
  styleUrls: ['./book-total.component.css']
})
export class BookTotalComponent {
  @Input() total: number | null = 0;
}
