import { randomIn } from '../../../shared/random';
import { IStyle, SketchConfiguration } from '../../index';

function contentGenerator(style: IStyle): string {
    const { primary, secondary, tertiary } = style;

    return `
        @grid: 16x1 / 100%;

        @shape: bud 7;
        @place-cell: center;
        @size: calc(100% - @i * (100% / @I));

        background: radial-gradient(
            @p(${randomIn(primary, secondary, tertiary)}@hex(@r(0, 255))),
            hsla(calc(@r(90) * @i), 70%, 65%)
        );

        @odd {
            mix-blend-mode: screen;
            animation: rotate-left @r(3s, 10s) linear infinite;
        }

        @even {
            mix-blend-mode: multiply;
            animation: rotate-right @r(3s, 10s) linear infinite; 
        }

        @keyframes rotate-left {
            from { rotate: 360deg; }
            to { rotate: 0deg; }
        }

        @keyframes rotate-right {
            from { rotate: 0deg; }
            to { rotate: 360deg; }
        }
    `;
}

export const kaleidoBoom: SketchConfiguration = {
    contentGenerator,
};
