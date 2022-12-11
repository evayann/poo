import { randomIn } from '@shared/random';
import { IStyle, SketchConfiguration } from '@sketches';

function contentGenerator(style: IStyle): string {
    const { primary, secondary, tertiary } = style;

    return `
        @grid: 6x1 / 100%;

        @place: @plot(r: .45; dir: auto -125);
        @size: 50%;

        border-radius: 50%;
        box-shadow: 45px 0 0 -10px ${randomIn(primary, secondary, tertiary)};
        filter: hue-rotate(calc(90deg / @I * @i));

        animation: colors 5s ease-in-out infinite;

        @keyframes colors {
        0%, 100% { filter: hue-rotate(calc(90deg / @I * @i)); }
        50% { filter: hue-rotate(calc(270deg / @I * @i)); }
        }
    `;
}

export const picassa: SketchConfiguration = {
    contentGenerator,
};
