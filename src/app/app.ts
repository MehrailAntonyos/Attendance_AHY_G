import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { ButtonModule } from 'primeng/button'
// import { PanelModule } from 'primeng/panel';
import { SHARED_PRIMENG_COMPS } from './Shared/SharedPrimeNgComs';

import { Navbar } from './Components/Layout/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, ...SHARED_PRIMENG_COMPS ],// Spread the shared PrimeNG array here
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Attendance_AHY_G');
}
