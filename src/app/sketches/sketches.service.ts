import { Injectable } from '@angular/core';
import { Sketches, Sketch, DoodleSketch } from './index';
import * as sketches from './doodle/list/_index';

@Injectable({
    providedIn: 'root',
})
export class SketchesService {
    public sketches: Sketches;

    constructor() {
        this.sketches = new Sketches(this.loadDoodleSketches());
    }

    private loadDoodleSketches(): Sketch[] {
        return Object.entries(sketches).map(([name, sc]) => new DoodleSketch(name, sc));
    }
}
