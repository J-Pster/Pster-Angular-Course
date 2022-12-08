import { Component, Input } from '@angular/core';
import Developer from 'src/app/interfaces/IDeveloper';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {
  @Input() developer!: Developer;

  constructor() {}
}
