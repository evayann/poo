import 'css-doodle';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { CSSDoodleElement } from '../../interfaces/css-doodle.interface';

@Component({
  standalone: true,
  selector: 'app-poo',
  templateUrl: './poo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PooComponent implements AfterViewInit {
  @ViewChild('doodle') doodle!: ElementRef<CSSDoodleElement>;
  @Input()
  set sketch(sketch: string) {
    console.log('New sketch is : ');
    console.log(sketch);
    this._sketch = sketch;
    this.updateSketck();
  }

  private _sketch: string;

  ngAfterViewInit() {
    this.updateSketck();
  }

  private updateSketck() {
    this.doodle?.nativeElement.update(this._sketch);
  }
}
