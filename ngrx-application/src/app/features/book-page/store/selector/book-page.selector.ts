import * as bpr from '../../store/reducer/book-page.reducer';

import { BookFeatureState, FEATURE_KEY } from '../../book-page.module';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IBook } from 'src/app/core/models/book-model';

const calculateBooksGrossEarnings = (books: IBook[]) => {
    return books.reduce((total, book) => {
      return total + parseInt(`${book.price}`, 10) || 0;
    }, 0);
  }
  
  export const selectSharedBooksState = createFeatureSelector<BookFeatureState>('shared-books');
  
  export const selectBooksState = createSelector(
    selectSharedBooksState,
    (state: BookFeatureState) => state.books
  );
  
  export const selectAllBooks = createSelector(
    selectBooksState,
    (state: bpr.BookState) => state.collection
  );
  
  export const selectEarningsTotals = createSelector(
    selectAllBooks,
    calculateBooksGrossEarnings
  );