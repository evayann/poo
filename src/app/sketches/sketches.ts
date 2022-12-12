import { randomIn } from '../shared/random';
import { Sketch } from './sketch';

export class Sketches {
    get all(): Sketch[] {
        return this.list;
    }

    get randomOne(): Sketch {
        return randomIn(...this.list);
    }

    constructor(private list: Sketch[]) {}

    get(name: string): Sketch | undefined {
        return this.list.find((sketch: Sketch) => sketch.name === name);
    }
}
