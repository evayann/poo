import { Component, OnInit } from '@angular/core';
import { polylineParameters, polylineSketch, Sketches } from '@sketches';
import { DoodleSketch } from '@sketches';
import { Sketch } from '@sketches';

@Component({
    selector: 'app-poos-page',
    templateUrl: './poos-page.component.html',
    styleUrls: ['./poos-page.component.scss'],
})
export class PoosPageComponent implements OnInit {
    pooSketches: Sketches;
    isPaused: boolean[];

    ngOnInit() {
        this.reload();
    }

    reload() {
        this.pooSketches = new Sketches([new DoodleSketch('polyline', polylineSketch, polylineParameters)]);
        this.isPaused = this.pooSketches.all.map(() => true);
    }
}
