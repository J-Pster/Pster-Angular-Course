import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {
  name: string = 'João Pster';
  age: number = 25;
  job: string = 'Developer';
  location: string = 'São Paulo, Brazil';
  bio: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.';
  frameworks: string[] = ['Angular', 'React', 'Django', 'Express'];

  constructor() {}
}
