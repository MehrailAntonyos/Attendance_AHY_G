import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-person',
  styleUrl: './person.css',
  templateUrl: './person.html',
})
export class Person {}

// 4. استقبال الـ Parameters في الصفحة المستهدفة
// في الكومبوننت المستقبلة (مثلاً UserProfileComponent)، تقدري تستخدمي ActivatedRoute عشان تقري الـ Parameters دي بسهولة:

// TypeScript
// import { Component, OnInit, inject } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-user-profile',
//   standalone: true,
//   template: `<h2>ملف المستخدم رقم: {{ userId }}</h2>`
// })
// export class UserProfileComponent implements OnInit {
//   private route = inject(ActivatedRoute);
//   userId: string | null = null;

//   ngOnInit() {
//     // قراءة الـ Parameter مباشرة
//     this.userId = this.route.snapshot.paramMap.get('id');
    
//     // أو باستخدام Observable لو الـ ID ممكن يتغير داخل نفس الصفحة
//     this.route.paramMap.subscribe(params => {
//       this.userId = params.get('id');
//     });
//   }
// }