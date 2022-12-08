import { Component, Input } from '@angular/core';
import Developer from 'src/app/interfaces/IDeveloper';

@Component({
  selector: 'app-list-developers',
  templateUrl: './list-developers.component.html',
  styleUrls: ['./list-developers.component.scss'],
})
export class ListDevelopersComponent {
  @Input() developers!: Developer[];

  constructor() {}
}
