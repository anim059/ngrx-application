import { createAction, props } from '@ngrx/store';


export const enter = createAction('[Books Page] Enter');

export const createBook = createAction(
    '[Books Page] Create Book',
    props<{ book: any }>()
  );
  
  export const updateBook = createAction(
    '[Books Page] Update Book',
    props<{ bookId: string; changes: any }>()
  );
  
  export const deleteBook = createAction(
    '[Books Page] Delete Book',
    props<{ bookId: string }>()
  );