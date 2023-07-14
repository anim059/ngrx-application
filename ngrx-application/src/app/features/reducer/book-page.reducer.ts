import { Action, createReducer, createSelector, on } from '@ngrx/store';
import * as booksAction from '../action/book-page.actions';
import * as booksActionApi from '../action/book-page-api.actions'
import { BookModel } from 'src/app/core/models/book-model';


const createBook = (books: BookModel[], book: BookModel) => [...books, book];
const updateBook = (books: BookModel[], changes: BookModel) =>
  books.map((book) => {
    return book.id === changes.id ? Object.assign({}, book, changes) : book;
  });
const deleteBook = (books: BookModel[], bookId: string) =>
  books.filter((book) => bookId !== book.id);
  
  const calculateBooksGrossEarnings = (books: BookModel[]) => {
    return books.reduce((total, book) => {
      return total + parseInt(`${book.earnings}`, 10) || 0;
    }, 0);
  }

export interface State {
  collection: BookModel[];
  activeBookId: string | null;
}

export const initialState: State = {
    collection: [],
    activeBookId: null,
};

export const reducer = createReducer(
    initialState,
    on(booksActionApi.booksLoaded,(state,action)=>{
        return {
            ...state,
            collection:action.books
        }
    }),
    on(booksActionApi.bookCreated,(state,action)=>{
        return{
            collection: createBook(state.collection, action.book),
            activeBookId: null,
        }
    }),
    on(booksActionApi.bookDeleted,(state,action)=>{
      return{
          ...state,
          collection: deleteBook(state.collection, action.bookId),
      }
  })
)



export const selectAll = (state: State) => state.collection;


export const selectEarningsTotals  = createSelector(
  selectAll,
  calculateBooksGrossEarnings
);