import { Component, OnInit } from '@angular/core';
import { ForceWeilder } from '../force-weilder';

@Component({
  selector: 'app-force-weilder',
  templateUrl: './force-weilder.component.html',
  styleUrls: ['./force-weilder.component.css']
})
export class ForceWeilderComponent implements OnInit {

  constructor() { }

  forceWeilder: ForceWeilder = {
    id : 1,
    name : "Mace Windu",
    force: 42
  }

  ngOnInit() {
  }

}
