import { randomIn } from '../shared/random';
import { Sketch } from './sketch';

export class Sketches {
    constructor(private list: Sketch[]) {}

    get randomOne(): Sketch {
        return randomIn(...this.list);
    }

    get(name: string): Sketch {
        return null;
    }

    get all(): Sketch[] {
        return this.list;
    }
}
