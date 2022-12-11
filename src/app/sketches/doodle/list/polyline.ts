import { random } from '@shared/random';
import { IStyle, SketchConfiguration } from '@sketches';

export type PolylineParameters = {
    stroke: number;
    angle: number;
    length: number;
};

function parametersGenerator(): PolylineParameters {
    return {
        stroke: random(0.2, 2),
        length: random(50, 100),
        angle: random(10, 30),
    };
}

function contentGenerator(style: IStyle, parameters: PolylineParameters): string {
    const { primary } = style;
    const { stroke, length, angle } = parameters;

    return `    
        @grid: 1 / 100%;

        background-repeat: no-repeat;
        background: @svg(
            svg {
                viewBox: -50 -60 100 100;
                stroke: ${primary};
                stroke-width: ${stroke};
                fill: none;

                polyline {
                    stroke-dasharray: 6500;
                    stroke-dashoffset: 6500;
                    points: @m${length}.@Plot(
                        turn: ${angle};
                        r: t;
                    );

                    animate {
                        dur: 10s;
                        repeatCount: 1000000;
                        attributeName: stroke-dashoffset;
                        values: 6500;0;6500;
                    }
                }
            }
        );`;
}

export const polyline: SketchConfiguration = {
    contentGenerator,
    parametersGenerator,
};
