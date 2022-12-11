import { random } from '@shared/random';
import { IStyle, SketchConfiguration, SketchContentGenerator } from '@sketches';

export type HypocycloidParameters = {
    stroke: number;
    angle: number;
    length: number;
};

function parametersGenerator(): HypocycloidParameters {
    return {
        stroke: random(0.2, 2),
        length: random(50, 100),
        angle: random(10, 30),
    };
}

function contentGenerator(style: IStyle, parameters: HypocycloidParameters): string {
    const { primary } = style;
    const { stroke } = parameters;

    return `
        @grid: 7 / 100%;

        @even {
            @shape: hypocycloid 4;
            background: ${primary};
            transform: scale(2) rotate(0deg);
            animation: rotate 5s infinite;
        }

        @keyframes rotate {
            from { transform: scale(${1 + stroke}) rotate(0deg); }  
            to { transform: scale(${1 + stroke}) rotate(90deg); }  
        }
    `;
}

export const hypocycloid: SketchConfiguration = {
    contentGenerator,
    parametersGenerator,
};
