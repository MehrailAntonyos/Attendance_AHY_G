
// In modern Angular (including Angular 18 through 22, which heavily rely on standalone components), 
// you don't need a traditional @NgModule to share libraries or UI elements. Instead, you can 
// create a clean TypeScript file exporting an array containing the PrimeNG components, modules,
// or directives you use most frequently.

import { ButtonModule } from 'primeng/button'
import { PanelModule } from 'primeng/panel';

import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';

// Export an array of commonly used PrimeNG components/modules
export const SHARED_PRIMENG_COMPS = [
  ButtonModule,
  PanelModule, 
  MenubarModule, 
  BadgeModule, 
  AvatarModule, 
  InputTextModule,


] as const;