import { Component, OnInit } from '@angular/core';
import { randomIn } from '../../shared/random';
import { getStyle } from '../../core/utilities';
import { sketches } from '../../sketches/common';

@Component({
  selector: 'app-poo-page',
  templateUrl: './poo-page.component.html',
  styleUrls: ['./poo-page.component.scss'],
})
export class PooPageComponent implements OnInit {
  currentSketch: string;
  isPaused: boolean = false;

  ngOnInit() {
    this.updateSketch();
  }

  updateSketch() {
    const style = getStyle();
    const sketchGenerator = randomIn(...sketches);
    this.currentSketch = sketchGenerator(style);
  }
}
