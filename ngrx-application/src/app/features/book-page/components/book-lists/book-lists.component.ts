import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IBook } from 'src/app/features/book-page/models/book-model';

@Component({
  selector: 'book-lists',
  templateUrl: './book-lists.component.html',
  styleUrls: ['./book-lists.component.css']
})
export class BookListsComponent {

  @Input() books: IBook[] | null = [];

  @Output() select = new EventEmitter();

  @Output() delete = new EventEmitter();

  onDelete(event:any, book: IBook) {
    event.stopPropagation();
    this.delete.emit(book);
  }

  onUpdate(book: IBook) {
    this.select.emit(book);
  }

}
