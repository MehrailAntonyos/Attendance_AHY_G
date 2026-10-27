
import { Service } from '@angular/core';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { firstValueFrom } from 'rxjs';

// دي بنية البيانات (Product Interface) تقدر تعدلها حسب بياناتك
export interface IProduct {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}

@Service()
export class Product {

    // استخدام الدالة inject بدلاً من constructor
    private http = inject(HttpClient);
    private apiUrl = 'assets/products.json'; // أو مسار الـ API بتاعك

    // تحويل الـ Observable إلى Promise عشان تشتغل بـ .then()
    async getProducts(): Promise<IProduct[]> {
        return firstValueFrom(this.http.get<IProduct[]>(this.apiUrl));
    }

    // getPersons() {
    //     let personsList = this.http.get(this.apiUrl);
    //     return personsList;
    // }



    



    //     private apiUrl = 'assets/products.json'; // أو مسار الـ API بتاعك

    //   constructor(private http: HttpClient) {}

    //   // تحويل الـ Observable إلى Promise عشان تشتغلي بـ .then()
    //   async getProducts(): Promise<Product[]> {
    //     return firstValueFrom(this.http.get<Product[]>(this.apiUrl));
    //   }

    // //     // لو بتعتمد على ملف JSON محلي أو API خارجي
    // //   private apiUrl = 'assets/products.json'; // كمثال لو عندك ملف JSON محلي

    // //   constructor(private http: HttpClient) {}

    // //   // دالة لجلب المنتجات
    // //   getProducts(): Observable<Product[]> {
    // //     return this.http.get<Product[]>(this.apiUrl);

    // //     // أو لو حابب ترجع بيانات وهمية (Mock Data) للتجربة السريعة دلوقتي:
    // //     // return of([... هنا ممكن تحط لستة منتجات تجريبية ...]);
    // //   }

}
