import { randomIn } from '../../../shared/random';
import { IStyle, SketchConfiguration } from '../../index';

function contentGenerator(style: IStyle): string {
    const { primary, secondary, tertiary } = style;

    return `
        @grid: 5x1 / 100%;

        position: absolute;
        top: @r(40, 60)%;
        left: @r(30, 70)%;

        @size: 0;
        padding-left: @r(15)%;
        box-shadow: 0 0 @r(10)vmin @r(1, 5)vmin ${randomIn(primary, secondary, tertiary)};

        filter: @svg-filter(
          feTurbulence {
            type: fractalNoise;
            baseFrequency: 0.01;
            numOctaves: 10;
          }
          feDisplacementMap {
            in: SourceGraphic;
            scale: 180;
          }
        );

        animation: translate 10s infinite;

        @keyframes translate {
          from { 
            top: @r(40, 60)%;
            left: @r(30, 70)%;
          }
          to { 
            top: @r(40, 60)%;
            left: @r(30, 70)%;
          }    
        }
    `;
}

export const cloud: SketchConfiguration = {
    contentGenerator,
};
