import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([BrowserAnimationsModule]),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideStore({
      
    }),
    provideStoreDevtools({
      connectInZone: true
  }),
  ]
};
