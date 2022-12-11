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
import { Sketch } from '@sketches';

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
    set sketch(sketch: Sketch) {
        if (this.debug) {
            console.log('New sketch is : ');
            console.log(sketch.name);
            console.log('With content : ');
            console.log(sketch.parse(0));
        }

        this._sketch = sketch.parse(0);
        this.updateSketck();
    }

    @Input()
    set pause(isPaused: boolean) {
        this._isPaused = isPaused;
        this.updateAnimationState();
    }

    @Input()
    debug: boolean = false;

    private _sketch: string;
    private _isPaused: boolean = false;

    ngAfterViewInit() {
        this.updateSketck();
        this.updateAnimationState();
    }

    private updateSketck() {
        this.doodle?.nativeElement.update(this._sketch);
    }

    private updateAnimationState() {
        if (this._isPaused) this.doodle?.nativeElement.pause();
        else this.doodle?.nativeElement.resume();
    }
}
