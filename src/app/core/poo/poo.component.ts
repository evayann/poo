import 'css-doodle';
import {
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
export class PooComponent {
  @ViewChild('doodle') doodle!: ElementRef<CSSDoodleElement>;
  @Input()
  set sketch(sketch: string) {
    console.log('New sketch is : ');
    console.log(sketch);
    this.doodle.nativeElement.update(sketch);
  }
}
