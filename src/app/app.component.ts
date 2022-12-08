import { Component } from '@angular/core';
import Developer from './interfaces/IDeveloper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pster-angular-course';
  currentData: Date = new Date();
  appVersion: string = '1.0.0';

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
}
