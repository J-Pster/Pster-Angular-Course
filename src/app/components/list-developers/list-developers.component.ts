import { Component } from '@angular/core';

import { ListDevelopersService } from 'src/app/services/list-developers.service';

import Developer from 'src/app/interfaces/IDeveloper';

@Component({
  selector: 'app-list-developers',
  templateUrl: './list-developers.component.html',
  styleUrls: ['./list-developers.component.scss'],
})
export class ListDevelopersComponent {
  developers: Developer[] = [];

  constructor(private listDevelopersService: ListDevelopersService) {
    this.getDevs();
  }

  onDeleteDev(developer: Developer): void {
    this.developers = this.listDevelopersService.deleteDev(
      developer,
      this.developers
    );
  }

  getDevs(): void {
    this.listDevelopersService.getDevs().subscribe((devs) => {
      this.developers = devs;
    });
  }
}
