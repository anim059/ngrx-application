import { Component } from '@angular/core';
import { BookModel } from 'src/app/core/models/book-model';
import { Store } from '@ngrx/store';
import { BookServiceService } from 'src/app/core/service/book-service.service';
import * as booksAction from '../../action/book-page.actions'
import * as booksActionApi from '../../action/book-page-api.actions'
import { Observable } from 'rxjs';
import { selectAllBooks } from '../book-page.module';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent {
  books$ !: Observable<BookModel[]>;
  currentBook: BookModel | null = null;
  total: number = 0;

  constructor(private booksService: BookServiceService,private store : Store) {
    this.books$ =  this.store.select(selectAllBooks);
  }

  ngOnInit() {
    this.getBooks();
    this.removeSelectedBook();

    this.store.dispatch(booksAction.enter());
  }

  getBooks() {
    let books =  this.booksService.all()
    this.updateTotals( books );

    this.store.dispatch(booksActionApi.booksLoaded({
      books: books
    }));
   
  }

  calculateBooksGrossEarnings(books: BookModel[]) {
    return books.reduce((total, book) => {
      return total + parseInt(`${book.earnings}`, 10) || 0;
    }, 0);
  }

  updateTotals(books: BookModel[]) {
    this.total = this.calculateBooksGrossEarnings(books);
  }

  onSelect(book: BookModel) {
    this.currentBook = book;
  }

  onCancel() {
    this.removeSelectedBook();
  }

  removeSelectedBook() {
    this.currentBook = null;
  }

  onSave(book: any | BookModel) {
    if ('id' in book) {
      this.updateBook(book);
    } else {
      this.saveBook(book);
    }
  }

  saveBook(bookProps: any) {
    this.store.dispatch(booksAction.createBook({
      book : bookProps
    }));

    this.booksService.create(bookProps).subscribe(() => {
      this.getBooks();
      this.removeSelectedBook();
    });
  }

  updateBook(book: BookModel) {
    // this.booksService.update(book.id, book).subscribe(() => {
    //   this.getBooks();
    //   this.removeSelectedBook();
    // });
  }

  onDelete(book: BookModel) {
    this.store.dispatch(booksAction.deleteBook({
      bookId : book.id
    }));
    console.log(book);
    this.booksService.delete(book.id).subscribe(() => {
      this.getBooks();
      this.removeSelectedBook();
    });
  }
}
