import { Routes } from '@angular/router';
import { Home } from './Components/Main/home/home';

export const routes: Routes = [
    // تحميل مباشر (Eager Loading) للصفحة الرئيسية مثلاً
  {
    path: '',
    component: Home
    // redirectTo: 'persons',
    // pathMatch: 'full'
  },
  // تحميل كسلان (Lazy Loading) لصفحة الـ Dashboard عشان الأداء في المشاريع الكبيرة
  {
    path: 'persons',
    loadComponent: () => import('./Components/Main/person/person').then(c => c.Person)
  },
//   // مسار بياخد Parameter بنظام الـ Standalone
//   {
//     path: 'user-profile/:id',
//     loadComponent: () => import('./features/user-profile/user-profile.component').then(c => c.UserProfileComponent)
//   }
];

//#region لو عندى مشروع كبير زى الموديولات تتقسم ازاى فى ال version الجديدة من angular 

// طيب هل لو مشروع كبير خالص بردو هتتعمل كل ال paths هنا فى ال app.routes.ts زى هنا ولا هتتقسم زى قبل كده modules و كل module ينادى ال components اللى جواه import { Routes } from '@angular/router';
 


// سؤال في غاية الذكاء! دي النقطة اللي بتفصل بين المبرمج اللي بيعمل مشروع صغير والمبرمج اللي بيعمل Enterprise Project (مشروع عملاق).

// الإجابة باختصار: لا، مش بنحط كل الـ Paths في ملف app.routes.ts لوحده أبدًا في المشاريع الكبيرة، لأن الملف هيكون زحمة وغير قابل للصيانة.

// بدل ما نرجع لنظام الـ NgModules القديم (اللي أتلغى تقريباً في النسخ الحديثة)، أنجولار وفّرت لنا ميزة Lazy-Loaded Routes Groups باستخدام خاصية loadChildren مع الـ Standalone Components.

// إزاي نقسم المسارات في مشروع عملاق؟
// بنقسم المشروع لـ Features (أقسام أو موديولات منطقية)، وكل قسم بيكون له ملف routes خاص بيه، وبعدين بنجمعهم في الملف الرئيسي.

// 1. ملف مسارات فرعي خاص بالـ Dashboard (مثلاً: dashboard.routes.ts)
// TypeScript
// import { Routes } from '@angular/router';

// export const DASHBOARD_ROUTES: Routes = [
//   {
//     path: '', // هتبقى /dashboard
//     loadComponent: () => import('./pages/overview/overview.component').then(c => c.OverviewComponent)
//   },
//   {
//     path: 'analytics', // هتبقى /dashboard/analytics
//     loadComponent: () => import('./pages/analytics/analytics.component').then(c => c.AnalyticsComponent)
//   },
//   {
//     path: 'settings', // هتبقى /dashboard/settings
//     loadComponent: () => import('./pages/settings/settings.component').then(c => c.SettingsComponent)
//   }
// ];
// 2. ملف مسارات فرعي خاص بالمستخدمين (مثلاً: users.routes.ts)
// TypeScript
// import { Routes } from '@angular/router';

// export const USER_ROUTES: Routes = [
//   {
//     path: ':id', // هتبقى /users/:id
//     loadComponent: () => import('./pages/profile/profile.component').then(c => c.ProfileComponent)
//   },
//   {
//     path: ':id/permissions', // هتبقى /users/:id/permissions
//     loadComponent: () => import('./pages/permissions/permissions.component').then(c => PermissionsComponent)
//   }
// ];
// 3. تجميع الكل في الملف الرئيسي app.routes.ts
// دلوقتي الملف الرئيسي بقى نظيف جداً ومقسّم بطريقة احترافية تعتمد على الـ Lazy Loading الحقيقي لمجموعة مسارات كاملة (loadChildren):

// TypeScript
// import { Routes } from '@angular/router';
// import { HomeComponent } from './features/home/home.component';

// export const routes: Routes = [
//   {
//     path: '',
//     component: HomeComponent
//   },
//   // ربط مجموعة مسارات الـ Dashboard بالكامل كـ Lazy Load
//   {
//     path: 'dashboard',
//     loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)
//   },
//   // ربط مجموعة مسارات الـ Users بالكامل
//   {
//     path: 'users',
//     loadChildren: () => import('./features/users/users.routes').then(m => m.USER_ROUTES)
//   },
//   // مسار خطأ (Page Not Found)
//   {
//     path: '**',
//     loadComponent: () => import('./features/not-found/not-found.component').then(c => c.NotFoundComponent)
//   }
// ];
// مميزات الطريقة دي في المشاريع الكبيرة:
// Separation of Concerns (فصل الاهتمامات): كل مبرمج أو فريق يققدر يشتغل في فولدر الـ Feature بتاع لوحده ومحدش بيعدل في ملف الـ app.routes.ts الرئيسي فبيحصلش (Merge Conflicts).

// Performance ممتاز (Lazy Loading): المتصفح مش هيحمل ملفات صفحة الـ Analytics أو الـ Settings غير لما المستخدم يدخل عليها فعلاً.

// نظافة الكود: ملف التوجيه الرئيسي بيمثل خريطة المشروع الكبيرة بس، والتفاصيل جوه كل ملف فرعي.

//#endregion