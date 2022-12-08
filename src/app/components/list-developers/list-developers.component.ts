import { Component, Input } from '@angular/core';

import { ListDevelopersService } from 'src/app/services/list-developers.service';

import Developer from 'src/app/interfaces/IDeveloper';

@Component({
  selector: 'app-list-developers',
  templateUrl: './list-developers.component.html',
  styleUrls: ['./list-developers.component.scss'],
})
export class ListDevelopersComponent {
  @Input() developers!: Developer[];

  constructor(private listDevelopersService: ListDevelopersService) {}

  onDeleteDev(developer: Developer) {
    this.developers = this.listDevelopersService.deleteDev(
      developer,
      this.developers
    );
  }
}
