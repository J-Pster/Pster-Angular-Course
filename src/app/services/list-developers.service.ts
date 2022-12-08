import { Injectable } from '@angular/core';
import Developer from '../interfaces/IDeveloper';

@Injectable({
  providedIn: 'root',
})
export class ListDevelopersService {
  constructor() {}

  deleteDev(developer: Developer, developers: Developer[]) {
    return developers.filter((dev) => dev.name !== developer.name);
  }
}
