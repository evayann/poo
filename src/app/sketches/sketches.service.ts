import { Injectable } from '@angular/core';
import { Sketches, Sketch, DoodleSketch } from './index';
import * as sketches from './doodle/list/_index';

@Injectable({
    providedIn: 'root',
})
export class SketchesService {
    public sketches: Sketches;

    get newSketches(): Sketches {
        return new Sketches(this.loadDoodleSketches());
    }

    constructor() {
        this.sketches = this.newSketches;
    }

    private loadDoodleSketches(): Sketch[] {
        return Object.entries(sketches).map(([name, sc]) => new DoodleSketch(name, sc));
    }
}
