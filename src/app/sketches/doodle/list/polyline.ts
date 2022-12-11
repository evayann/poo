import { random } from '@shared/random';
import { IStyle, SketchGenerator, SketchParameters } from '@sketches';

export type PolylineParameters = {
    stroke: number;
    angle: number;
    length: number;
};

export const polylineParameters: SketchParameters = () => {
    return {
        stroke: random(0.2, 2),
        length: random(50, 100),
        angle: random(10, 30),
    };
};

export const polylineSketch: SketchGenerator = (style: IStyle, parameters: PolylineParameters) => {
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
};
