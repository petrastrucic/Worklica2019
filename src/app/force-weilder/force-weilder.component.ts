import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-force-weilder',
  templateUrl: './force-weilder.component.html',
  styleUrls: ['./force-weilder.component.css']
})
export class ForceWeilderComponent implements OnInit {

  constructor() { }

  forceWeilder = "Mace Windu";

  ngOnInit() {
  }

}
