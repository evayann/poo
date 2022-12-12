import { randomIn } from '../../../shared/random';
import { IStyle, SketchConfiguration } from '../../index';

function contentGenerator(style: IStyle): string {
    const { primary, secondary, tertiary } = style;

    return `
        @grid: 1 / 100%;

        background-image: @svg(
            viewBox: .5 .5 10 10;
            stroke: #1B2D37;
            stroke-width: .04;
          
            rect*10x10 {
                fill: ${randomIn(primary, secondary, tertiary)};
                x: calc(@nx - @r(.85, 1) / 2);
                y: calc(@ny - @lr / 2);
                width, height: @lr;
                filter: url(#test);
            }
          
            filter#test {
                feTurbulence {
                    type: fractalNoise;
                    baseFrequency: 0.1 2;
              
                    animate {
                        attributeName: baseFrequency;
                        values: 0;.1;0.5,2;0.1,2;
                        from: 0;
                        to: 100;
                        dur: 10s;
                        repeatCount: indefinite;
                    }
                }
                
                feDisplacementMap {
                    in: SourceGraphic;
                    animate {
                        attributeName: scale;
                        values: 1;0.2;0.7;0;2;3;1;
                        dur: 10s;
                        repeatCount: indefinite;
                    }
                }
            }
        );
    `;
}

export const squishyGrid: SketchConfiguration = {
    contentGenerator,
};
