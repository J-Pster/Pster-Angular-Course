import { Component } from '@angular/core';

import { ListDevelopersService } from 'src/app/services/list-developers.service';

import Developer from 'src/app/interfaces/IDeveloper';

@Component({
  selector: 'app-list-developers',
  templateUrl: './list-developers.component.html',
  styleUrls: ['./list-developers.component.scss'],
})
export class ListDevelopersComponent {
  developers: Developer[] = [
    {
      name: 'João Pster',
      age: 25,
      job: 'Developer',
      location: 'São Paulo, Brazil',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
      frameworks: ['Angular', 'React', 'Django', 'Express'],
    },
    {
      name: 'Maria Pster',
      age: 24,
      job: 'Developer',
      location: 'São Paulo, Brazil',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
      frameworks: ['MongoDB', 'Express', 'React', 'Node'],
    },
    {
      name: 'Pedro Pster',
      age: 23,
      job: 'Developer',
      location: 'São Paulo, Brazil',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
      frameworks: ['Vue', 'Angular', 'React', 'Django'],
    },
  ];

  constructor(private listDevelopersService: ListDevelopersService) {}

  onDeleteDev(developer: Developer) {
    this.developers = this.listDevelopersService.deleteDev(
      developer,
      this.developers
    );
  }
}
