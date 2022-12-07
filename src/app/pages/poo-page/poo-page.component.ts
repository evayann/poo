import { Component, OnInit } from '@angular/core';
import { getStyle, random } from '../../core/utilities';
import { sketches } from '../../sketches/common';

@Component({
  selector: 'app-poo-page',
  templateUrl: './poo-page.component.html',
  styleUrls: ['./poo-page.component.scss'],
})
export class PooPageComponent implements OnInit {
  currentSketch: string;

  ngOnInit() {
    this.updateSketch();
  }

  updateSketch() {
    const style = getStyle();
    const sketchGenerator = random(sketches);
    this.currentSketch = sketchGenerator(style);
  }
}
