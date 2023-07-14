import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookModel } from 'src/app/core/models/book-model';

@Component({
  selector: 'book-lists',
  templateUrl: './book-lists.component.html',
  styleUrls: ['./book-lists.component.css']
})
export class BookListsComponent {
  @Input() books: BookModel[] | null = [];
  @Input() readonly: boolean | null = false;
  @Output() select = new EventEmitter();
  @Output() delete = new EventEmitter();
}
