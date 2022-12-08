import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Developer from '../interfaces/IDeveloper';

@Injectable({
  providedIn: 'root',
})
export class ListDevelopersService {
  private apiUrl = 'http://localhost:3000/developers';

  constructor(private http: HttpClient) {}

  deleteDev(developer: Developer, developers: Developer[]) {
    return developers.filter((dev) => dev.name !== developer.name);
  }

  getDevs(): Observable<Developer[]> {
    return this.http.get<Developer[]>(this.apiUrl);
  }

  getDev(id: number): Observable<Developer> {
    return this.http.get<Developer>(`${this.apiUrl}/${id}`);
  }
}
