import { Component } from '@angular/core';
import Developer from './interfaces/IDeveloper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pster-angular-course';
  currentData: Date = new Date();
  appVersion: string = '1.0.0';
}
