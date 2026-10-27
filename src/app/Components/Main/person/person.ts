// // import { Component, OnInit, inject } from '@angular/core';
// // // import { ProductService } from '@/service/productservice';
// // import { MessageService, ConfirmationService } from 'primeng/api';
// // import { SHARED_PRIMENG_COMPS } from '../../../Shared/SharedPrimeNgComs';
// // import { IProduct, Product } from '../../../Service/product';
// // // import { Product } from '@/domain/product';
// // import { TableModule } from 'primeng/table';
// // import { TextareaModule } from 'primeng/textarea';
// // import { CommonModule, CurrencyPipe } from '@angular/common';

// // interface Column {
// //     field: string;
// //     header: string;
// //     customExportHeader?: string;
// // }

// // interface ExportColumn {
// //     title: string;
// //     dataKey: string;
// // }


// // @Component({
// //   standalone: true,
// //   imports: [CommonModule, ...SHARED_PRIMENG_COMPS, TableModule, TextareaModule, CurrencyPipe], // دلوقتي بقت مصفوفة سليمة 100% بدون خدمات
// //   providers: [MessageService, ConfirmationService, Product], // الخدمات مكانها هنا الصح
// //   selector: 'app-person',
// //   styleUrl: './person.css',
// //   templateUrl: './person.html',
// // })
// // export class Person implements OnInit{
// //   // تقدري تستخدميهم بالـ inject لو حابة:
// //   private messageService = inject(MessageService);
// //   private confirmationService = inject(ConfirmationService);


// //   private productService = inject(Product);
// //     // private messageService = inject(MessageService);
// //     // private confirmationService = inject(ConfirmationService);
// //     productDialog: boolean = false;
// //     products!: IProduct[];
// //     product!: IProduct;
// //     selectedProducts!: IProduct[] | null;
// //     submitted: boolean = false;
// //     statuses!: any[];
// //     cols!: Column[];
// //     exportColumns!: ExportColumn[];

// //     ngOnInit() {
// //         this.productService.getProducts().then((data) => {
// //             this.products = data;
// //         });
// //         this.statuses = [
// //             { label: 'INSTOCK', value: 'instock' },
// //             { label: 'LOWSTOCK', value: 'lowstock' },
// //             { label: 'OUTOFSTOCK', value: 'outofstock' }
// //         ];
// //         this.cols = [
// //             { field: 'code', header: 'Code', customExportHeader: 'Product Code' },
// //             { field: 'name', header: 'Name' },
// //             { field: 'image', header: 'Image' },
// //             { field: 'price', header: 'Price' },
// //             { field: 'category', header: 'Category' }
// //         ];
// //         this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
// //     }

// //     openNew() {
// //         this.product = {};
// //         this.submitted = false;
// //         this.productDialog = true;
// //     }

// //     editProduct(product: IProduct) {
// //         this.product = { ...product };
// //         this.productDialog = true;
// //     }

// //     deleteSelectedProducts() {
// //         this.confirmationService.confirm({
// //             message: 'Are you sure you want to delete the selected products?',
// //             header: 'Confirm',
// //             icon: 'pi pi-exclamation-triangle',
// //             rejectButtonProps: {
// //                 label: 'No',
// //                 severity: 'secondary',
// //                 variant: 'text'
// //             },
// //             acceptButtonProps: {
// //                 severity: 'danger',
// //                 label: 'Yes'
// //             },
// //             accept: () => {
// //                 this.products = this.products.filter((val) => !this.selectedProducts?.includes(val));
// //                 this.selectedProducts = null;
// //                 this.messageService.add({
// //                     severity: 'success',
// //                     summary: 'Successful',
// //                     detail: 'Products Deleted',
// //                     life: 3000
// //                 });
// //             }
// //         });
// //     }

// //     hideDialog() {
// //         this.productDialog = false;
// //         this.submitted = false;
// //     }

// //     deleteProduct(product: IProduct) {
// //         this.confirmationService.confirm({
// //             message: 'Are you sure you want to delete ' + product.name + '?',
// //             header: 'Confirm',
// //             icon: 'pi pi-exclamation-triangle',
// //             rejectButtonProps: {
// //                 label: 'No',
// //                 severity: 'secondary',
// //                 variant: 'text'
// //             },
// //             acceptButtonProps: {
// //                 severity: 'danger',
// //                 label: 'Yes'
// //             },
// //             accept: () => {
// //                 this.products = this.products.filter((val) => val.id !== product.id);
// //                 this.product = {};
// //                 this.messageService.add({
// //                     severity: 'success',
// //                     summary: 'Successful',
// //                     detail: 'Product Deleted',
// //                     life: 3000
// //                 });
// //             }
// //         });
// //     }

// //     findIndexById(id: string): number {
// //         let index = -1;
// //         for (let i = 0; i < this.products.length; i++) {
// //             if (this.products[i].id === id) {
// //                 index = i;
// //                 break;
// //             }
// //         }

// //         return index;
// //     }

// //     createId(): string {
// //         let id = '';
// //         var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// //         for (var i = 0; i < 5; i++) {
// //             id += chars.charAt(Math.floor(Math.random() * chars.length));
// //         }
// //         return id;
// //     }

// //     getSeverity(status: string) {
// //         switch (status) {
// //             case 'INSTOCK':
// //                 return 'success';
// //             case 'LOWSTOCK':
// //                 return 'warn';
// //             case 'OUTOFSTOCK':
// //                 return 'danger';
// //         }
// //     }

// //     saveProduct() {
// //         this.submitted = true;

// //         if (this.product.name?.trim()) {
// //             if (this.product.id) {
// //                 this.products[this.findIndexById(this.product.id)] = this.product;
// //                 this.messageService.add({
// //                     severity: 'success',
// //                     summary: 'Successful',
// //                     detail: 'Product Updated',
// //                     life: 3000
// //                 });
// //             } else {
// //                 this.product.id = this.createId();
// //                 this.product.code = this.createId();
// //                 this.product.image = 'product-placeholder.svg';
// //                 this.products.push(this.product);
// //                 this.messageService.add({
// //                     severity: 'success',
// //                     summary: 'Successful',
// //                     detail: 'Product Created',
// //                     life: 3000
// //                 });
// //             }

// //             this.products = [...this.products];
// //             this.productDialog = false;
// //             this.product = {};
// //         }
// //     }

// // }

// // // 4. استقبال الـ Parameters في الصفحة المستهدفة
// // // في الكومبوننت المستقبلة (مثلاً UserProfileComponent)، تقدري تستخدمي ActivatedRoute عشان تقري الـ Parameters دي بسهولة:

// // // TypeScript
// // // import { Component, OnInit, inject } from '@angular/core';
// // // import { ActivatedRoute } from '@angular/router';

// // // @Component({
// // //   selector: 'app-user-profile',
// // //   standalone: true,
// // //   template: `<h2>ملف المستخدم رقم: {{ userId }}</h2>`
// // // })
// // // export class UserProfileComponent implements OnInit {
// // //   private route = inject(ActivatedRoute);
// // //   userId: string | null = null;

// // //   ngOnInit() {
// // //     // قراءة الـ Parameter مباشرة
// // //     this.userId = this.route.snapshot.paramMap.get('id');

// // //     // أو باستخدام Observable لو الـ ID ممكن يتغير داخل نفس الصفحة
// // //     this.route.paramMap.subscribe(params => {
// // //       this.userId = params.get('id');
// // //     });
// // //   }
// // // }


// import { Component, OnInit, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// // import { ProductService, IProduct } from '../../service/product.service'; 
// import { SHARED_PRIMENG_COMPS } from '../../../Shared/SharedPrimeNgComs';
// import { MessageService, ConfirmationService } from 'primeng/api';
// import { IProduct, Product } from '../../../Service/product';

// interface Column {
//     field: string;
//     header: string;
//     customExportHeader?: string;
// }

// interface ExportColumn {
//     title: string;
//     dataKey: string;
// }

// @Component({
//   standalone: true,
//   imports: [CommonModule, ...SHARED_PRIMENG_COMPS], // أضفنا CommonModule هنا لحل مشكلة ngIf
//   providers: [MessageService, ConfirmationService],
//   selector: 'app-person',
//   styleUrl: './person.css',
//   templateUrl: './person.html',
// })


// export class Person implements OnInit {

//   private productService = inject(Product);

//   products: IProduct[] = [];
//   selectedProducts: IProduct[] = [];
//   product: IProduct = {};

//   productDialog: boolean = false;
//   submitted: boolean = false;

//   cols!: Column[];
//   exportColumns!: ExportColumn[];
//   statuses: any[] = [];

//   ngOnInit(): void {
//     // this.productService.getProducts().then((data) => {
//     //     this.products = data;

//     // });

//      this.products = [
//           {
//             id: '1',
//             code: '01',
//             name: 'p1',
//             description: 'vvv',
//             price: 10,
//             quantity: 5,
//             inventoryStatus: 'dede',
//             category: 'ddd',
//             image: 'cccc',
//             rating: 2
//           },
//            {
//             id: '2',
//             code: '02',
//             name: 'p2',
//             description: 'plpl',
//             price: 100,
//             quantity: 6,
//             inventoryStatus: 'jjj',
//             category: 'ooo',
//             image: 'plplplllll',
//             rating: 4
//           }
//         ]

//     this.statuses = [
//         { label: 'INSTOCK', value: 'instock' },
//         { label: 'LOWSTOCK', value: 'lowstock' },
//         { label: 'OUTOFSTOCK', value: 'outofstock' }
//     ];

//     this.cols = [
//         { field: 'code', header: 'Code', customExportHeader: 'Product Code' },
//         { field: 'name', header: 'Name' },
//         { field: 'image', header: 'Image' },
//         { field: 'price', header: 'Price' },
//         { field: 'category', header: 'Category' }
//     ];

//     this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
//   }

//   openNew() {
//     this.product = {};
//     this.submitted = false;
//     this.productDialog = true;
//   }

//   hideDialog() {
//     this.productDialog = false;
//     this.submitted = false;
//   }

//   editProduct(product: IProduct) {
//     this.product = { ...product };
//     this.productDialog = true;
//   }

//   deleteProduct(product: IProduct) {}
//   deleteSelectedProducts() {}
//   saveProduct() {
//     this.submitted = true;
//   }

//   exportCSV(event: any) {
//     // كود التصدير التجريبي
//   }

//   getSeverity(status: string | undefined): "success" | "warn" | "danger" | "info" {
//     switch (status) {
//       case 'INSTOCK': return 'success';
//       case 'LOWSTOCK': return 'warn';
//       case 'OUTOFSTOCK': return 'danger';
//       default: return 'info'; // تم إضافة القيمة الافتراضية لحل خطأ TS7030
//     }
//   }
// }




// import { Component } from '@angular/core';
import { Component, OnInit, ViewChild, inject, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ThemeSwitcher } from './themeswitcher';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Dialog, DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { FileUploadModule } from 'primeng/fileupload';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
// import { ProductService } from '@/service/productservice';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ProductService } from '../../../Service/Product/product-service';
// import { Product } from '@/domain/product';

export interface Product {
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

interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

interface ExportColumn {
  title: string;
  dataKey: string;
}

@Component({
  standalone: true,
  imports: [CommonModule, ButtonModule, ConfirmDialogModule, DialogModule, SelectModule, FileUploadModule, IconFieldModule, InputIconModule, InputNumberModule, RadioButtonModule, RatingModule, TableModule, TagModule, ToastModule, ToolbarModule, InputTextModule, FormsModule],
  providers: [ProductService, MessageService, ConfirmationService],
  selector: 'app-person',
  styleUrl: './person.css',
  templateUrl: './person.html',
})


export class Person implements OnInit {
  private productService = inject(ProductService);
  private messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);

  @ViewChild('dt') table: Table | undefined;

  productDialog: boolean = false;
  products!: Product[];
  product!: Product;
  selectedProducts!: Product[] | null;
  submitted: boolean = false;
  statuses!: any[];
  cols!: Column[];
  exportColumns!: ExportColumn[];


  ngOnInit() {
    // getProducts() مش نافعة علشان بترجع promise فلولا ما اعمل اى تغيير فى html ادوس على زرار مثلا لولا ما يجيب الداتا فى الجدول ASynchronous
    // this.productService.getProducts().then((data) => {
    //   // this.products = data;
    //   // console.log("products in person page: ", this.products);

    //   // استخدام Spread Operator لإنشاء مرجع جديد للمصفوفة ليتعرف عليه الجدول فوراً
    //   this.products = [...data];
    // console.log("products in person page: ", this.products);

    // });


    
    // استقبال البيانات مباشرة بشكل Synchronous
    this.products = this.productService.getProductsData();
    console.log("products: ", this.productService.getProductsData());

    console.log("products in person page: ", this.products);

    this.statuses = [
      { label: 'INSTOCK', value: 'instock' },
      { label: 'LOWSTOCK', value: 'lowstock' },
      { label: 'OUTOFSTOCK', value: 'outofstock' }
    ];
    this.cols = [
      { field: 'code', header: 'Code', customExportHeader: 'Product Code' },
      { field: 'name', header: 'Name' },
      { field: 'image', header: 'Image' },
      { field: 'price', header: 'Price' },
      { field: 'category', header: 'Category' }
    ];
    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  editProduct(product: Product) {
    this.product = { ...product };
    this.productDialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      rejectButtonProps: {
        label: 'No',
        severity: 'secondary',
        variant: 'text'
      },
      acceptButtonProps: {
        severity: 'danger',
        label: 'Yes'
      },
      accept: () => {
        this.products = this.products.filter((val) => !this.selectedProducts?.includes(val));
        this.selectedProducts = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Products Deleted',
          life: 3000
        });
      }
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  deleteProduct(product: Product) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      rejectButtonProps: {
        label: 'No',
        severity: 'secondary',
        variant: 'text'
      },
      acceptButtonProps: {
        severity: 'danger',
        label: 'Yes'
      },
      accept: () => {
        this.products = this.products.filter((val) => val.id !== product.id);
        this.product = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Deleted',
          life: 3000
        });
      }
    });
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  getSeverity(status: string): string {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info';
    }
  }

  saveProduct() {
    this.submitted = true;

    if (this.product.name?.trim()) {
      if (this.product.id) {
        this.products[this.findIndexById(this.product.id)] = this.product;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Updated',
          life: 3000
        });
      } else {
        this.product.id = this.createId();
        this.product.code = this.createId();
        this.product.image = 'product-placeholder.svg';
        this.products.push(this.product);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Created',
          life: 3000
        });
      }

      this.products = [...this.products];
      this.productDialog = false;
      this.product = {};
    }
  }

  exportCSV(event: any) {
    console.log("export btn event: ", event);
    // كود التصدير التجريبي
  }
}