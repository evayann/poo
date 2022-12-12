import { randomIn } from '../../../shared/random';
import { IStyle, SketchConfiguration } from '../../index';
import { shapes } from '../shapes.list';

function contentGenerator(style: IStyle): string {
    return `
        @grid: 18x1 / 100%;
        background: #0a0c27;
        margin: 0 auto;

        --hue: calc(60 * (@i - 1));
        @shape: ${randomIn(...shapes)};
        @place-cell: center;
        @size: calc(100% / @I * @i);
        opacity: calc(1.1 - 1 / @I * @i);
        z-index: calc(@I - @i);
        background: hsl(var(--hue), 100%, 50%);
        animation: grow 750ms linear infinite;
        will-change: background;
        
        @keyframes grow {
            0% { background: hsl(calc(var(--hue)), 100%, 50%); }
            16.67% { background: hsl(calc(var(--hue) + 60), 100%, 50%); }
            33.3% { background: hsl(calc(var(--hue) + 120), 100%, 50%); }
            50% { background: hsl(calc(var(--hue) + 180), 100%, 50%); }
            66.6% { background: hsl(calc(var(--hue) + 240), 100%, 50%); }
            83.33% { background: hsl(calc(var(--hue) + 300), 100%, 50%); }
            100% { background: hsl(calc(var(--hue) + 360), 100%, 50%); }
        }
    `;
}

export const rainbowTunnel: SketchConfiguration = {
    contentGenerator,
};
