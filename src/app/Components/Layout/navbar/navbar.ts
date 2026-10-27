import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuItem } from 'primeng/api';
// import { MenubarModule } from 'primeng/menubar';
// import { BadgeModule } from 'primeng/badge';
// import { AvatarModule } from 'primeng/avatar';
// import { InputTextModule } from 'primeng/inputtext';
// import { RippleModule } from 'primeng/ripple';

import { SHARED_PRIMENG_COMPS } from '../../../Shared/SharedPrimeNgComs';

@Component({
  imports: [CommonModule, ...SHARED_PRIMENG_COMPS],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
    //   {
    //     label: 'Home',
    //     icon: 'pi pi-home',
    //   },
      
      {
        label: 'الرئيسية',
        icon: 'pi pi-home',
        routerLink: ['/'],
      },
      {
        label: 'Persons',
        icon: 'pi pi-chart-bar',
        routerLink: ['/persons'],
      },
       {
        label: 'Products',
        icon: 'pi pi-chart-bar',
        routerLink: ['/products'],
      },
      {
        label: 'الملف الشخصي',
        icon: 'pi pi-user',
        // مثال لإرسال Parameter مع الـ Route
        routerLink: ['/user-profile', 42],
      },

      {
        label: 'Features',
        icon: 'pi pi-star',
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Core',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S',
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
            shortcut: '⌘+B',
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
            shortcut: '⌘+U',
          },
          {
            separator: true,
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette',
                badge: '2',
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette',
                badge: '3',
              },
            ],
          },
        ],
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        badge: '3',
      },
    ];
  }
}
