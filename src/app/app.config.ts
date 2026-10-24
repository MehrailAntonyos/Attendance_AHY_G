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
import { environment } from '../environments/environment';
// import { env } from 'process';


// الكومنت اللى تحته بالظبط لااااااااازم يتكتب علشان يتجاهله و ميطلعش ايرور فده مش رفاهيه
// @ts-ignore
// const primeNgLicenseKey = import.meta.env['NG_APP_PRIMENG_LICENSE'] || ''; //عملنا ده بدل اللى تحت علشان اللى تحت مش شغال فى ال build مع موقع vercel اللى رفعت عليه المشروع 

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
      license: environment.NG_APP_PRIMENG_LICENSE, // استخدام المتغير من الـ env
      // license: primeNgLicenseKey // استخدام المفتاح من متغيرات بيئة Vercel

      
      // license: process.env['NG_APP_PRIMENG_LICENSE'], 
      // //عشان تقرأي المتغيرات دي في الكود، بتقدري توصلي لها في app.config.ts عن طريق process.env['NG_APP_PRIMENG_LICENSE'] (أو بالطريقة المعيارية المتاحة في حزم الـ build الحديثة مثل @angular/build


      // ripple: true // تفعيل الـ ripple effect وتجنب رسائل الترخيص للـ Community edition
    }),
    provideAnimationsAsync()
  ],
};