import { Component, OnInit } from '@angular/core';
import { Sketches, SketchesService } from '../../sketches/index';

@Component({
    selector: 'app-poos-page',
    templateUrl: './poos-page.component.html',
    styleUrls: ['./poos-page.component.scss'],
})
export class PoosPageComponent implements OnInit {
    pooSketches: Sketches;
    isPaused: boolean[];

    constructor(private ss: SketchesService) {}

    ngOnInit() {
        this.reload();
    }

    reload() {
        this.pooSketches = this.ss.sketches;
        this.isPaused = this.pooSketches.all.map(() => true);
    }
}
