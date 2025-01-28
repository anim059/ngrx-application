import { ActionReducerMap, provideState, provideStore } from '@ngrx/store';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IAppState } from './core/models/appState';
import { ProductsEffects } from './features/shopping-cart/store/product/product.effects';
import { cartReducer } from './features/shopping-cart/store/cart/cart.reducer';
import { productReducer } from './features/shopping-cart/store/product/product.reducer';
import { provideEffects } from '@ngrx/effects';
import { provideRouter } from '@angular/router';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';

const rootReducer: ActionReducerMap<IAppState> = {
  productState: productReducer,
  cartState: cartReducer
}

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([BrowserAnimationsModule]),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideStore({}),
    provideState('root', rootReducer),
    provideStoreDevtools({
      connectInZone: true
    }),
    provideEffects(ProductsEffects)
  ]
};
