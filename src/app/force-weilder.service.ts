import { Injectable } from '@angular/core';
import { WEILDERS } from './weilders';
import { ForceWeilder } from './force-weilder';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForceWeilderService {

  constructor() { }

  getWeilders(): Observable<ForceWeilder[]> {
    return of(WEILDERS);
  }
  
}
