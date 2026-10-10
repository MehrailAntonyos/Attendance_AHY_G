import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
  withNoIncrementalHydration,
} from '@angular/platform-browser';
// import { providePrimeNG } from 'primeng/config';
// import Aura from '@primeuix/themes/aura';

// import { provideAnimations } from '@angular/platform-browser/animations'; // <-- 1. ضيفي الـ Import ده

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // <-- استبدلي القديمة دي

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay(), withNoIncrementalHydration()),
    // providePrimeNG({ theme: { preset: Aura } }),
    // provideAnimations() // <-- 2. ضيفي دي جوه الـ providers
    provideAnimationsAsync() // <-- استخدمي دي
  ],
};
