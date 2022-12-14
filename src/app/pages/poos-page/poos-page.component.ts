import { Component, OnInit } from '@angular/core';
import { Sketches, SketchesService } from '../../sketches/index';
import { p5test } from '../../sketches/index';

@Component({
    selector: 'app-poos-page',
    templateUrl: './poos-page.component.html',
    styleUrls: ['./poos-page.component.scss'],
})
export class PoosPageComponent implements OnInit {
    pooSketches: Sketches;
    isPaused: boolean[];
    p5test = p5test;

    constructor(private ss: SketchesService) {}

    ngOnInit() {
        this.reload();
    }

    reload() {
        this.pooSketches = this.ss.newSketches;
        this.isPaused = this.pooSketches.all.map(() => true);
    }
}
