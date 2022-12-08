import { Component, OnInit } from '@angular/core';
import { getStyle } from '../../core/utilities';
import { sketches } from '../../sketches/common';

@Component({
  selector: 'app-poos-page',
  templateUrl: './poos-page.component.html',
  styleUrls: ['./poos-page.component.scss'],
})
export class PoosPageComponent implements OnInit {
  pooSketches: string[];
  isPaused: boolean[];

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.pooSketches = sketches.map((sketchGenerator) =>
      sketchGenerator(getStyle())
    );
    this.isPaused = sketches.map(() => true);
  }
}
