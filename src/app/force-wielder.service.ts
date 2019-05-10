import { Injectable } from '@angular/core';
import { WIELDERS } from './wielders';
import { ForceWielder } from './force-wielder';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForceWielderService {

  constructor() { }

  getWielders(): Observable<ForceWielder[]> {
    return of(WIELDERS);
  }
}
