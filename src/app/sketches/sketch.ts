import { SketchConfiguration, SketchContentGenerator, SketchParametersGenerator } from './sketch.type';

export abstract class Sketch {
    constructor(public name: string, protected sketchConfiguration: SketchConfiguration) {}

    abstract parse(seed: number): string;
}
