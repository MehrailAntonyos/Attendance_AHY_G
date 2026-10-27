
// // // In modern Angular (including Angular 18 through 22, which heavily rely on standalone components), 
// // // you don't need a traditional @NgModule to share libraries or UI elements. Instead, you can 
// // // create a clean TypeScript file exporting an array containing the PrimeNG components, modules,
// // // or directives you use most frequently.

// // import { ButtonModule } from 'primeng/button'
// // import { PanelModule } from 'primeng/panel';

// // import { MenubarModule } from 'primeng/menubar';
// // import { BadgeModule } from 'primeng/badge';
// // import { AvatarModule } from 'primeng/avatar';
// // import { InputTextModule } from 'primeng/inputtext';


// // import { FormsModule } from '@angular/forms';
// // import { ConfirmDialogModule } from 'primeng/confirmdialog';
// // import { Dialog, DialogModule } from 'primeng/dialog';
// // import { SelectModule } from 'primeng/select';
// // import { FileUploadModule } from 'primeng/fileupload';
// // import { IconFieldModule } from 'primeng/iconfield';
// // import { InputIconModule } from 'primeng/inputicon';
// // import { InputNumberModule } from 'primeng/inputnumber';
// // import { RadioButtonModule } from 'primeng/radiobutton';
// // import { RatingModule } from 'primeng/rating';
// // import { Table } from 'primeng/table';
// // // import { TableModule } from 'primeng/table';
// // import { TagModule } from 'primeng/tag';
// // import { ToastModule } from 'primeng/toast';
// // import { ToolbarModule } from 'primeng/toolbar';

// // // // مصفوفة المكونات والـ Modules فقط (بدون Services)
// // // import { MessageService, ConfirmationService } from 'primeng/api';

// // // Export an array of commonly used PrimeNG components/modules
// // export const SHARED_PRIMENG_COMPS = [
// //   ButtonModule,
// //   PanelModule, 
// //   MenubarModule, 
// //   BadgeModule, 
// //   AvatarModule, 
// //   InputTextModule,


// //   FormsModule,
// //   ConfirmDialogModule,
// //   Dialog,
// //   DialogModule,
// //   SelectModule,
// //   FileUploadModule,
// //   IconFieldModule,
// //   InputIconModule,
// //   InputNumberModule,
// //   RadioButtonModule,
// //   RatingModule,
// //   Table,
// //   // TableModule,
// //   TagModule,
// //   ToastModule,
// //   ToolbarModule,

// //   // // مصفوفة المكونات والـ Modules فقط (بدون Services)
// //   // MessageService,
// //   // ConfirmationService

// // ] as const;



// import { ButtonModule } from 'primeng/button';
// import { PanelModule } from 'primeng/panel';
// import { MenubarModule } from 'primeng/menubar';
// import { BadgeModule } from 'primeng/badge';
// import { AvatarModule } from 'primeng/avatar';
// import { InputTextModule } from 'primeng/inputtext';
// import { FormsModule } from '@angular/forms';
// import { ConfirmDialogModule } from 'primeng/confirmdialog';
// import { Dialog, DialogModule } from 'primeng/dialog';
// import { SelectModule } from 'primeng/select';
// import { FileUploadModule } from 'primeng/fileupload';
// import { IconFieldModule } from 'primeng/iconfield';
// import { InputIconModule } from 'primeng/inputicon';
// import { InputNumberModule } from 'primeng/inputnumber';
// import { RadioButtonModule } from 'primeng/radiobutton';
// import { RatingModule } from 'primeng/rating';
// import { TableModule } from 'primeng/table'; // تأكدي إن TableModule موجودة مش Table بس
// import { TagModule } from 'primeng/tag';
// import { ToastModule } from 'primeng/toast';
// import { ToolbarModule } from 'primeng/toolbar';

// export const SHARED_PRIMENG_COMPS = [
//   ButtonModule,
//   PanelModule, 
//   MenubarModule, 
//   BadgeModule, 
//   AvatarModule, 
//   InputTextModule,
//   FormsModule,
//   ConfirmDialogModule,
//   Dialog,
//   DialogModule,
//   SelectModule,
//   FileUploadModule,
//   IconFieldModule,
//   InputIconModule,
//   InputNumberModule,
//   RadioButtonModule,
//   RatingModule,
//   TableModule, // تأكدي إنها TableModule
//   TagModule,
//   ToastModule,
//   ToolbarModule
// ] as const;




import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Dialog, DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { FileUploadModule } from 'primeng/fileupload';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';

export const SHARED_PRIMENG_COMPS = [
  ButtonModule,
  PanelModule, 
  MenubarModule, 
  BadgeModule, 
  AvatarModule, 
  InputTextModule,
  FormsModule,
  ConfirmDialogModule,
  Dialog,
  DialogModule,
  SelectModule,
  FileUploadModule,
  IconFieldModule,
  InputIconModule,
  InputNumberModule,
  RadioButtonModule,
  RatingModule,
  TableModule,
  TagModule,
  ToastModule,
  ToolbarModule
] as const;