import { remove } from '../../../shared/array';
import { randomIn } from '../../../shared/random';
import { IStyle, SketchConfiguration } from '../../index';

function contentGenerator(style: IStyle): string {
    const { primary, secondary, tertiary } = style;
    const colors = [primary, secondary, tertiary];
    const c1 = randomIn(...colors);
    const c2 = randomIn(remove(c1, colors));

    return `
        @grid: 10 / 100%;
        
        animation: bounce linear @r(7s, 15s) @r(-1s, -5s) infinite;
        opacity: @r(0.3, 1);
        @place-cell: @r(100%) @r(100%);

        :after {
            content: @p(🍭, 🍫, 🧁, 🍪);
            position: absolute;
            @place-cell: @r(100%) @r(100%);
            font-size: @r(15px, 25px);
            z-index: @p(1, 2);
            transform: rotate(@r(360deg));
        }

        @keyframes bounce {
            0% {
                transform: translateY(@r(-101vh, -110vh));
            }
            100% {
                transform: translateY(@r(101vh, 110vh));
            }
        }
    `;
}

export const sugarRain: SketchConfiguration = {
    contentGenerator,
};
