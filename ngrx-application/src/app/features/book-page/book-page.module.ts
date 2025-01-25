import * as bpr from './store/reducer/book-page.reducer';

import {
  ActionReducerMap,
  MetaReducer,
  provideState,
} from '@ngrx/store';

import { BookFormComponent } from './components/book-form/book-form.component';
import { BookHeaderComponent } from './components/book-header/book-header.component';
import { BookListsComponent } from './components/book-lists/book-lists.component';
import { BookPageComponent } from './components/book-page/book-page.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

export const FEATURE_KEY = 'shared-books';

export interface BookFeatureState {
  books: bpr.BookState;
}

export const reducers: ActionReducerMap<BookFeatureState> = {
  books: bpr.Bookreducer,
};

export const metaReducers: MetaReducer<BookFeatureState>[] = [];

@NgModule({
  declarations: [
    BookFormComponent,
    BookHeaderComponent,
    BookListsComponent,
    BookPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: BookPageComponent },
    ]),
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [
    provideState(FEATURE_KEY, reducers, { metaReducers })
  ]

})
export class BookPageModule { }
