import { Component,  } from '@angular/core';

import { SHARED_PRIMENG_COMPS } from '../../../Shared/SharedPrimeNgComs';

@Component({
  imports: [...SHARED_PRIMENG_COMPS],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  protected readonly title = 'Attendance_AHY_G';
}
