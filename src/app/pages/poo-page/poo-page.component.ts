import { Component, OnInit } from '@angular/core';
import { Sketch, SketchesService } from '../../sketches/index';

@Component({
    selector: 'app-poo-page',
    templateUrl: './poo-page.component.html',
    styleUrls: ['./poo-page.component.scss'],
})
export class PooPageComponent implements OnInit {
    currentSketch: Sketch;
    isPaused: boolean = false;

    constructor(private ss: SketchesService) {}

    ngOnInit() {
        this.updateSketch();
    }

    updateSketch() {
        this.currentSketch = this.ss.sketches.last;
    }
}
