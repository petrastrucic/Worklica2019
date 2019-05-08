import { Injectable } from '@angular/core';
import { WEILDERS } from './weilders';
import { ForceWeilder } from './force-weilder';

@Injectable({
  providedIn: 'root'
})
export class ForceWeilderService {

  constructor() { }

  getHeroes(): ForceWeilder[] {
    return WEILDERS;
  }
  
}
