// // import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
// // import { provideRouter } from '@angular/router';

// // import { routes } from './app.routes';
// // import {
// //   provideClientHydration,
// //   withEventReplay,
// //   withNoIncrementalHydration,
// // } from '@angular/platform-browser';
// // import { providePrimeNG } from 'primeng/config';
// // import Aura from '@primeuix/themes/aura';

// // // import { provideAnimations } from '@angular/platform-browser/animations'; // <-- 1. ضيفي الـ Import ده

// // import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // <-- استبدلي القديمة دي

// // export const appConfig: ApplicationConfig = {
// //   providers: [
// //     provideBrowserGlobalErrorListeners(),
// //     provideRouter(routes),
// //     provideClientHydration(withEventReplay(), withNoIncrementalHydration()),
// //     providePrimeNG({ 
// //       theme: { preset: Aura },
// //       license: 'PRIMEUI-LICENSE-KEY' }),
// //     // provideAnimations() // <-- 2. ضيفي دي جوه الـ providers
// //     provideAnimationsAsync() // <-- استخدمي دي
// //   ],
// // };

// import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
// import {
//   provideClientHydration,
//   withEventReplay,
//   withNoIncrementalHydration,
// } from '@angular/platform-browser';
// import { providePrimeNG } from 'primeng/config';
// import Aura from '@primeuix/themes/aura';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideBrowserGlobalErrorListeners(),
//     provideRouter(routes),
//     provideClientHydration(withEventReplay(), withNoIncrementalHydration()),
//     providePrimeNG({ 
//       theme: { preset: Aura } 
//       // تم حذف سطر الـ license هنا تماماً
//     }),
//     provideAnimationsAsync()
//   ],
// };

import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
  withNoIncrementalHydration,
} from '@angular/platform-browser';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay(), withNoIncrementalHydration()),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.my-app-dark',
          cssLayer: false
        },

      },
      // VERYYYYYYYYYYYYYYYYYYYYYYYY IMPORTANTTTTTTTTTTTTTTTTTTTT
      license: 'eyJpZCI6IjQ1NTg4YjY5LTc5YjktNDk1Ny1hNjkzLTEzNTIwMjUzYTQwZCIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3OTI2NTc2NTUsImV4cCI6MTgyNDE5MzY1NX0.XxNkIlAmRV9gIPQHyqsPjdAq3fao417GMyve0xaaN8wa5nb4w-SdmBMxrVNjLMi5PM4PjON-i0ZT00O_Gk3LCQ',


      // ripple: true // تفعيل الـ ripple effect وتجنب رسائل الترخيص للـ Community edition
    }),
    provideAnimationsAsync()
  ],
};