import { randomIn } from '../../../shared/random';
import { remove } from '../../../shared/array';
import { IStyle, SketchConfiguration } from '../../index';

function contentGenerator(style: IStyle): string {
    const { primary, secondary, tertiary, shapeColor } = style;
    const colors = [primary, secondary, tertiary, shapeColor];
    const c1 = randomIn(...colors);
    const c2 = randomIn(remove(c1, colors));
    return `
        @grid: 50x1 / 100%;

        @place-cell: center;
        @size: 100%;

        ::before{
            content: "";
            @size: @r(10%);
            border: 1px solid white;
            background: @p(none, ${randomIn(
                primary,
                secondary,
                tertiary
            )}, linear-gradient(to @p(bottom, left), @stripe(${c1}, ${c2} 1px, ${c1}, ${c2} 1px, ${c1}, ${c2} 1px, ${c1}, ${c2} 1px, ${c1}, ${c2} 1px, ${c1})));
            border-radius: @p(0, 50%);
            position: absolute;
            top: @r(100%);
            left: @r(100%);
            animation: floatingUpDown @r(1.5s, 5s) @r(1.5s) linear infinite alternate; 
        }

        ::after {
            content: "";
            height: @r(1%);
            width: @r(3%, 14%);
            background: ${randomIn(primary, secondary)};
            position: absolute;
            top: @r(100%);
            left: @r(100%);
            animation: floatingStickAnim @r(1.5s, 5s) @r(1.5s) linear infinite alternate; 
            transform: translateX(300%);
        }

        @keyframes floatingUpDown {
            100% {
                transform: translateY(-50%) rotateZ(@r(-5, 5)deg);
            }
        }

        @keyframes floatingStickAnim {
            100% {
                transform: translateX(-300%);
            }
        }
    `;
}

export const floatingShape: SketchConfiguration = {
    contentGenerator,
};
