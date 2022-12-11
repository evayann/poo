import { SketchGenerator, SketchParameters } from './sketch.type';

export abstract class Sketch {
    constructor(public name: string, protected sketch: SketchGenerator, protected parameters: SketchParameters) {}

    abstract parse(seed: number): string;
}
