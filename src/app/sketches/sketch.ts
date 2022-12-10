import { getStyle } from '../core/utilities';
import { IStyle } from '../interfaces/style.interface';
import { randomIn } from '../shared/random';

export type SketchParameters = () => unknown;
export type SketchGenerator = (
    style: IStyle,
    customParameters: () => unknown
) => string;

export class Sketches extends Array<Sketch> {
    constructor(private list: unknown) {
        super();
    }

    get randomOne(): Sketch {
        return randomIn(...this);
    }

    get(name: string): Sketch {
        return null;
    }
}

export class Sketch {
    get parse() {
        const style: IStyle = getStyle();
        return `
            ${this.sketchShape(style.shapeColor, style.bgColor)}
            ${this.sketch(style, () => {})}
            `;
    }

    constructor(private sketch: SketchGenerator) {}

    private sketchShape(shapeColor: string, bgColor: string) {
        return `
            :doodle {
                @shape: drop;
                background-color: ${shapeColor};
            }
            
            :doodle > * {
                @shape: drop;
                
                background-color: ${bgColor};
                
                top: 5%;
                left: 5%;
                width: 90%;
                height: 90%;
            }`;
    }
}
