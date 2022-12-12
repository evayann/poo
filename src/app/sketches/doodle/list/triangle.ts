import { IStyle, SketchConfiguration } from '../../index';

function contentGenerator(style: IStyle): string {
    const { primary } = style;

    return `
        @grid: 18 / 100%;

        --hue: calc(180deg + 1.5 * @row * @col);
        background: ${primary};
        filter: hue-rotate(calc(180deg + 1.5deg * @row * @col));
        margin: -.5px;
        transition: @r(.5s) ease;
        clip-path: polygon(@p(
        '0 0, 100% 0, 100% 100%',
        '0 0, 100% 0, 0 100%',
        '0 0, 100% 100%, 0 100%',
        '100% 0, 100% 100%, 0 100%'
        ));
    `;
}

export const triangle: SketchConfiguration = {
    contentGenerator,
};
