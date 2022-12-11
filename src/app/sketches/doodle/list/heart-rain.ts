import { IStyle, SketchConfiguration } from '@sketches';

function contentGenerator(style: IStyle): string {
    const { primary, shapeColor } = style;

    return `
        @grid: 10 / 100%;

        background: @p(${primary}, ${shapeColor});
        transform: translate(
                @r(-50vw, 50vw),
                @r(-50vh, 50vh)
            );
        @size: 3.5vmin;
        @shape: heart;
        @place-cell: 50% 50%;
        animation-name: explosion;
        animation-iteration-count: infinite;
        animation-direction: reverse;
        animation-duration: calc(@r(2s, 5s, .1));
        animation-delay: calc(@r(-5s, -1s, .1));
        animation-timing-function:
        cubic-bezier(.84, .02, 1, 1);
        @keyframes explosion {
        0% { opacity: 0; }
        70% { opacity: 1; }
        100% { transform: translate(0, 0); }
        }
    `;
}

export const heartRain: SketchConfiguration = {
    contentGenerator,
};
