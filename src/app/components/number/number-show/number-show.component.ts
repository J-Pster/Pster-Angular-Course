import { Component } from '@angular/core';

@Component({
  selector: 'app-number-show',
  templateUrl: './number-show.component.html',
  styleUrls: ['./number-show.component.scss'],
})
export class NumberShowComponent {
  number: number = 0;

  constructor() {}

  onNumberChange(): void {
    this.number++;
  }
}
