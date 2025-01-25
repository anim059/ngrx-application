import * as booksActionApi from '../../store/action/book-page-api.actions';

import { selectAllBooks, selectEarningsTotals } from '../../store/selector/book-page.selector';

import { Component } from '@angular/core';
import { IBook } from 'src/app/core/models/book-model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent {

  books$ !: Observable<IBook[]>;

  total$ !: Observable<number>;

  currentSelectedBook: IBook = {
    id: '',
    name: '',
    price: 0,
    description: ''
  };

  constructor(private store: Store) { }

  ngOnInit() {
    this.books$ = this.store.select(selectAllBooks);
    this.total$ = this.store.select(selectEarningsTotals);
  }

  onSave(obj: { type: string, book: any }) {
    if (obj.type === 'update') {
      this.updateBook(obj.book);
    } else {
      this.saveBook(obj.book);
    }
  }

  onSelect(book: IBook) {
    this.currentSelectedBook = book;
  }

  saveBook(bookProps: IBook) {
    this.store.dispatch(booksActionApi.bookCreate({
      book: bookProps
    }));
  }

  updateBook(book: IBook) {
    this.currentSelectedBook = { id: '', name: '', price: 0, description: '' };
    this.store.dispatch(booksActionApi.bookUpdate({
      book: book
    }));
  }

  onDelete(book: IBook) {
    this.currentSelectedBook = { id: '', name: '', price: 0, description: '' };
    this.store.dispatch(booksActionApi.bookDelete({
      bookId: book.id?.toString() as string
    }));
  }
}
