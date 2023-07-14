import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListsComponent } from './book-lists/book-lists.component';
import { BookTotalComponent } from './book-total/book-total.component';
import { BookPageComponent } from './book-page/book-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  StoreModule,
} from '@ngrx/store';


import * as fromBooks from '../reducer/book-page.reducer';

export const FEATURE_KEY = 'shared-books';

export interface State {
    books: fromBooks.State;
  }
  
  export const reducers: ActionReducerMap<State> = {
    books: fromBooks.reducer,
  };

  export const metaReducers: MetaReducer<State>[] = [];

@NgModule({
  declarations: [
    BookDetailsComponent,
    BookListsComponent,
    BookTotalComponent,
    BookPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: BookPageComponent },
    ]),
    StoreModule.forFeature(FEATURE_KEY, reducers, { metaReducers }),
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  
})
export class BookPageModule { }

export const selectSharedBooksState = createFeatureSelector<State>(FEATURE_KEY);

export const selectBooksState = createSelector(
  selectSharedBooksState,
  (state: State) => state.books
);

export const selectAllBooks = createSelector(
  selectBooksState,
  fromBooks.selectAll
);
