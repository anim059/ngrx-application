import { createAction, props } from '@ngrx/store';

import { IBook } from 'src/app/core/models/book-model';

export const booksLoaded = createAction(
  '[Books API] Books Loaded Success'
);

export const bookCreate = createAction(
  '[Books API] Book Created',
  props<{ book: IBook }>()
);

export const bookUpdate = createAction(
  '[Books API] Book Updated',
  props<{ book: IBook }>()
);

export const bookDelete = createAction(
  '[Books API] Book Deleted',
  props<{ bookId: string }>()
);