import { randomIn } from '../../../shared/random';
import { IStyle, SketchConfiguration } from '../../index';
import { mathShapes } from '../shapes.list';

function contentGenerator(style: IStyle): string {
    const { primary, secondary, tertiary } = style;

    return `
        @grid: 5 / 100%;

        border-radius: @r(35%);
        @random {
            @shape: @p(${mathShapes});
        }
        background-color: ${randomIn(primary, secondary, tertiary)};

        animation: filter @r(4, 10)s infinite;

        @keyframes filter {
          0%, 100% {
            filter: @svg-filter(
              feTurbulence {
                type: fractalNoise;
                baseFrequency: @r(.01, 0.02) .5;
              }
              feDisplacementMap {
                in: SourceGraphic;
                scale: @r(10, 20);
              }
            );
          }
          50% {
            filter: @svg-filter(
              feTurbulence {
                type: fractalNoise;
                baseFrequency: @r(.1, .2) @r(1, 2);
              }
              feDisplacementMap {
                in: SourceGraphic;
                scale: @r(80, 100);
              }
            );
          }
        }
    `;
}

export const mathShape: SketchConfiguration = {
    contentGenerator,
};
