import * as booksActionApi from '../action/book-page-api.actions'

import { createReducer, on } from '@ngrx/store';

import { IBook } from 'src/app/features/book-page/models/book-model';

export interface BookState {
  collection: IBook[];
}

export const initialState: BookState = {
  collection: [],
};

export const Bookreducer = createReducer(
  initialState,
  on(booksActionApi.booksLoaded, (state) => {
    return {
      ...state,
      collection: state.collection,
    }
  }),
  on(booksActionApi.bookCreate, (state, action) => {
    const bookId = state.collection.length + 1;
    const updateBookCollection = [...state.collection, {...action.book, id: bookId.toString()}];
    return {
      ...state,
      collection: updateBookCollection,
    }
  }),
  on(booksActionApi.bookDelete, (state, action) => {
    const updateBookCollection = state.collection.filter(book => book.id !== action.bookId);
    return {
      ...state,
      collection: updateBookCollection,
    }
  }),
  on(booksActionApi.bookUpdate, (state, action) => {
    const updateBookCollection = state.collection.map((book) => {
      if (book.id === action.book.id) {
        return {
          ...book,
          ...action.book
        };
      }
      return book;
    });
    return {
      ...state,
      collection: updateBookCollection,
    }
  })
)