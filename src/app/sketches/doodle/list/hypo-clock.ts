import { IStyle, SketchConfiguration } from '../../index';

function contentGenerator(style: IStyle): string {
    const { primary, secondary, tertiary } = style;

    return `
        @grid: 10x1 / 100%;

        @place-cell: center;
        @shape: hypocycloid 6;
        @size: calc(100% / @I * @i);

        @size: calc(90% / @I * @i);
        background-color: #60569e;
        background-color: hsla(
            calc(20 * @i), 70%, 68%,
            calc(3 / @i * .8)
        );

        z-index: calc(10 + (@I - @i));
        transform: rotate(calc(@i * 30deg));
        animation: loop 5s ease infinite;
        animation-delay: calc(@i * 500ms);

        @keyframes loop {
            0 { transform: rotate(calc(@i * 30deg)); }
            5% { transform: rotate(calc(@i * 30deg + 60deg)); }
            10% { transform: rotate(calc(@i * 30deg + 60deg));}
            15% { transform: rotate(calc(@i * 30deg)); }
            20% { transform: rotate(calc(@i * 30deg)); }
            25% { transform: rotate(calc(@i * 30deg + 60deg)); }
            30% { transform: rotate(calc(@i * 30deg + 60deg));}
            35% { transform: rotate(calc(@i * 30deg)); }
            100% { transform: rotate(calc(@i * 30deg)); }
        }
    `;
}

export const hypoClock: SketchConfiguration = {
    contentGenerator,
};
