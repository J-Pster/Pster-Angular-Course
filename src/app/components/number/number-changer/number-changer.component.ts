import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-changer',
  templateUrl: './number-changer.component.html',
  styleUrls: ['./number-changer.component.scss'],
})
export class NumberChangerComponent {
  @Output() numberChange: EventEmitter<any> = new EventEmitter();

  handleClick(): void {
    this.numberChange.emit();
  }
}
