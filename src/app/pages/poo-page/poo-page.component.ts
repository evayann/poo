import { AfterViewInit, Component } from '@angular/core';
import { random } from '../../core/utilities';
import { sketches } from './sketches';

@Component({
  selector: 'app-poo-page',
  templateUrl: './poo-page.component.html',
  styleUrls: ['./poo-page.component.css'],
})
export class PooPageComponent implements AfterViewInit {
  currentSketch: string;

  ngAfterViewInit() {
    this.updateSketch();
  }

  updateSketch() {
    const style = this.getStyle();
    const sketchGenerator = random(sketches);
    this.currentSketch = sketchGenerator(style);
  }

  private getStyle() {
    return {
      primary: random(['#AF42AE', '#07A0C3']),
      bgColor: random(['#D6BBC0', '#F0C808']),
      shapeColor: random(['#C585B3', '#DD1C1A']),

      stroke: random(0.2, 2),
      length: random(50, 100),
      angle: random(10, 30),
    };
  }
}
