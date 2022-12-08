import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  showEaster: boolean = false;

  constructor() {}

  showEasterSwitch(): void {
    this.showEaster = !this.showEaster;
  }
}
