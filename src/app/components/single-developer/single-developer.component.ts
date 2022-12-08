import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListDevelopersService } from 'src/app/services/list-developers.service';
import Developer from 'src/app/interfaces/IDeveloper';

@Component({
  selector: 'app-single-developer',
  templateUrl: './single-developer.component.html',
  styleUrls: ['./single-developer.component.scss'],
})
export class SingleDeveloperComponent {
  developer?: Developer;

  constructor(
    private listDevelopersService: ListDevelopersService,
    private route: ActivatedRoute
  ) {
    this.getDev();
  }

  getDev(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listDevelopersService.getDev(id).subscribe((dev) => {
      this.developer = dev;
    });
  }
}
