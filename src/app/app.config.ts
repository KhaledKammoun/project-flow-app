import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideLucideIcons } from '@lucide/angular';
import { LucideSquareCheck, LucideFilePen  } from '@lucide/angular'; // Pick icons

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideLucideIcons(LucideSquareCheck, LucideFilePen)

  ]
};
