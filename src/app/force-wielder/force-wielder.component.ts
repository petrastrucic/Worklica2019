import { Component, OnInit } from '@angular/core';

import { ForceWielder } from '../force-wielder';
import { ForceWielderService } from '../force-wielder.service';

@Component({
  selector: 'app-force-wielder',
  templateUrl: './force-wielder.component.html',
  styleUrls: ['./force-wielder.component.css']
})
export class ForceWielderComponent implements OnInit {

  // wielders = WIELDERS;
  wielders: ForceWielder[];
  selectedForceWielder: ForceWielder;

  constructor(private wielderService: ForceWielderService) { }

  ngOnInit() {
    this.getWielders();
  }

  onSelect(forceWielder: ForceWielder): void {
    this.selectedForceWielder = forceWielder;
  }

  getWielders(): void {
    this.wielderService.getWielders()
      .subscribe(wielders => this.wielders = wielders);
  }
}
