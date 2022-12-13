import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import p5 from 'p5';

@Component({
    selector: 'app-poo-p5',
    templateUrl: './p5.component.html',
    styleUrls: ['./p5.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class P5Component {
    @ViewChild('p5', { static: true }) canvas!: ElementRef<HTMLElement>;
    @Input() init!: (element: HTMLElement) => p5;

    private sketch!: p5;

    ngAfterViewInit() {
        this.sketch = this.init(this.canvas.nativeElement);
    }

    ngOnDestroy() {
        this.sketch.remove();
    }
}
