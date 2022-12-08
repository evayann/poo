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
    //console.log('New sketch is : ');
    //console.log(sketch);

    this._sketch = sketch;
    this.updateSketck();
  }

  @Input()
  set pause(isPause: boolean) {
    this._isPause = isPause;
    this.updateAnimationState();
  }

  private _sketch: string;
  private _isPause: boolean = false;

  ngAfterViewInit() {
    this.updateSketck();
    this.updateAnimationState();
  }

  private updateSketck() {
    this.doodle?.nativeElement.update(this._sketch);
  }

  private updateAnimationState() {
    this.doodle?.nativeElement.setAttribute(
      'style',
      `--cssd-animation-play-state: ${this._isPause ? 'paused' : 'running'}`
    );
  }
}
