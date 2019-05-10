import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WIELDERS } from './wielders';
import { ForceWielder } from './force-wielder';

@Injectable({
  providedIn: 'root'
})
export class ForceWielderService {

  constructor() { }

  getWielders(): Observable<ForceWielder[]> {
    return of(WIELDERS);
  }
  
}
