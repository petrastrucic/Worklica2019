import { Component, OnInit } from '@angular/core';

import { ForceWeilder } from '../force-weilder';
import { ForceWeilderService } from '../force-weilder.service';

@Component({
  selector: 'app-force-weilder',
  templateUrl: './force-weilder.component.html',
  styleUrls: ['./force-weilder.component.css']
})
export class ForceWeilderComponent implements OnInit {

  // weilders = WEILDERS;
  weilders: ForceWeilder[];
  selectedForceWeilder: ForceWeilder;

  constructor(private weilderService: ForceWeilderService) { }

  ngOnInit() {
    this.getWeilders();
  }

  onSelect(forceWeilder: ForceWeilder): void {
    this.selectedForceWeilder = forceWeilder;
  }

  getWeilders(): void {
    this.weilderService.getWeilders()
      .subscribe(weilders => this.weilders = weilders);;
  }
}
