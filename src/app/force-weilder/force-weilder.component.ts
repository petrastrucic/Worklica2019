import { Component, OnInit } from '@angular/core';
import { ForceWeilder } from '../force-weilder';
import { WEILDERS } from '../weilders';

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

  weilders = WEILDERS;
  selectedForceWeilder: ForceWeilder;

  ngOnInit() {
  }

  onSelect(forceWeilder: ForceWeilder): void {
    this.selectedForceWeilder = forceWeilder;
  }

}
