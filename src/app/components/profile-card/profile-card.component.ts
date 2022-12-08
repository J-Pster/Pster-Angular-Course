import { Component, Input, Output, EventEmitter } from '@angular/core';
import Developer from 'src/app/interfaces/IDeveloper';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {
  @Output() deleteDev: EventEmitter<any> = new EventEmitter();
  @Input() developer!: Developer;

  constructor() {}

  handleDelete() {
    this.deleteDev.emit(this.developer);
  }

  handleView() {
    console.log('view');
  }
}
