// // import { Component } from '@angular/core';

// import { Component, OnInit, inject, signal } from '@angular/core';
// import { CommonModule } from '@angular/common';
// // import { ThemeSwitcher } from './themeswitcher';
// import { FormsModule } from '@angular/forms';
// import { ButtonModule } from 'primeng/button';
// import { SelectModule } from 'primeng/select';
// import { IconFieldModule } from 'primeng/iconfield';
// import { InputIconModule } from 'primeng/inputicon';
// import { MultiSelectModule } from 'primeng/multiselect';
// import { ProgressBarModule } from 'primeng/progressbar';
// import { SliderModule } from 'primeng/slider';
// import { Table, TableModule } from 'primeng/table';
// import { TagModule } from 'primeng/tag';
// import { InputTextModule } from 'primeng/inputtext';
// import { CustomerService } from '../../../Service/Customer/customer-service';
// import { PrimeNG } from 'primeng/config';
// // import { CustomerService } from '@/service/customerservice';
// // import { Customer, Representative, Country } from '@/domain/customer';


// export interface Representative {
//     name?: string;
//     image?: string;
// }


// export interface Customer {
//     id?: number;
//     name?: string;
//     country?: Country;
//     company?: string;
//     date?: string | Date;
//     status?: string;
//     activity?: number;
//     representative?: Representative;
//     verified?: boolean;
//     balance?: number;
// }

// export interface Country {
//     name?: string;
//     code?: string;
// }



// @Component({
//   // imports: [CommonModule, ThemeSwitcher, ButtonModule, SelectModule, IconFieldModule, InputIconModule, MultiSelectModule, ProgressBarModule, SliderModule, TableModule, TagModule, InputTextModule, FormsModule],
//   imports: [CommonModule, ButtonModule, SelectModule, IconFieldModule, InputIconModule, MultiSelectModule, ProgressBarModule, SliderModule, TableModule, TagModule, InputTextModule, FormsModule],

//   providers: [CustomerService],

//   selector: 'app-product',
//   styleUrl: './product.css',
//   templateUrl: './product.html',
// })
// export class Product implements OnInit {
//   private customerService = inject(CustomerService);
//   // customerService = inject(CustomerService);
//   customers = signal<Customer[]>([]);
//   representatives = signal<Representative[]>([]);
//   statuses = signal<any[]>([]);
//   loading = signal(true);
//   searchValue = signal('');
//   activityValues = signal<number[]>([0, 100]);

//    constructor(private primengConfig: PrimeNG) {}

//   ngOnInit() {
//     this.customerService.getCustomersLarge().then((customers) => {
//       customers.forEach((customer: Customer) => (customer.date = new Date(customer.date as string)));
//       this.customers.set(customers);

//       this.primengConfig.ripple.set(true);
//       this.loading.set(false);
      
//     });
//     this.representatives.set([
//       { name: 'Amy Elsner', image: 'amyelsner.png' },
//       { name: 'Anna Fali', image: 'annafali.png' },
//       { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
//       { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
//       { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
//       { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
//       { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
//       { name: 'Onyama Limba', image: 'onyamalimba.png' },
//       { name: 'Stephen Shaw', image: 'stephenshaw.png' },
//       { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
//     ]);
//     this.statuses.set([
//       { label: 'Unqualified', value: 'unqualified' },
//       { label: 'Qualified', value: 'qualified' },
//       { label: 'New', value: 'new' },
//       { label: 'Negotiation', value: 'negotiation' },
//       { label: 'Renewal', value: 'renewal' },
//       { label: 'Proposal', value: 'proposal' }
//     ]);
//   }

//   clear(table: Table) {
//     table.clear();
//     this.searchValue.set('');
//   }

//   getSeverity(status: string) {
//     switch (status) {
//       case 'unqualified':
//         return 'danger';

//       case 'qualified':
//         return 'success';

//       case 'new':
//         return 'info';

//       case 'negotiation':
//         return 'warn';

//       case 'renewal':
//         return null;
//     }

//     return status;
//   }
// }




import { Component, OnInit, inject, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // 1. استوردها هنا
// import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { CustomerService } from '../../../Service/Customer/customer-service';

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: number | string;
    country?: Country;
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    representative?: Representative;
    verified?: boolean;
    balance?: number;
}

export interface Country {
    name?: string;
    code?: string;
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule, 
    ButtonModule, 
    SelectModule, 
    IconFieldModule, 
    InputIconModule, 
    MultiSelectModule, 
    ProgressBarModule, 
    SliderModule, 
    TableModule, 
    TagModule, // للتأكد
    InputTextModule, 
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // 2. أضفها هنا
  providers: [CustomerService],
  styleUrl: './product.css',
  templateUrl: './product.html',
})
export class Product implements OnInit {
  private customerService = inject(CustomerService);
  
  customers = signal<Customer[]>([]);
  representatives = signal<Representative[]>([]);
  statuses = signal<any[]>([]);
  loading = signal(true);
  searchValue = signal('');
  activityValues = signal<number[]>([0, 100]);

  ngOnInit() {
    this.customerService.getCustomersLarge().then((customers) => {
      customers.forEach((customer: Customer) => (customer.date = new Date(customer.date as string)));
      this.customers.set(customers);
      this.loading.set(false);
    });

    this.representatives.set([
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
    ]);

    this.statuses.set([
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' }
    ]);
  }

  clear(table: Table) {
    table.clear();
    this.searchValue.set('');
  }

  getSeverity(status: string) {
    switch (status) {
      case 'unqualified': return 'danger';
      case 'qualified': return 'success';
      case 'new': return 'info';
      case 'negotiation': return 'warn';
      case 'renewal': return null;
    }
    return status;
  }
}