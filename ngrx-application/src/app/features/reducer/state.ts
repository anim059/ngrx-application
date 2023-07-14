// import { NgModule } from '@angular/core';
// import {
//   ActionReducerMap,
//   createFeatureSelector,
//   createSelector,
//   MetaReducer,
//   StoreModule,
// } from '@ngrx/store';

// import * as fromBooks from '../reducer/book-page.reducer';

// export const FEATURE_KEY = 'shared-books';

// export interface State {
//     books: fromBooks.State;
//   }
  
//   export const reducers: ActionReducerMap<State> = {
//     books: fromBooks.reducer,
//   };

//   @NgModule({
//     imports: [StoreModule.forFeature(FEATURE_KEY, reducers)],
//   })
//   export class SharedStateBooksModule {}