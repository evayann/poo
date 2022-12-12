import { randomIn } from '../../../shared/random';
import { patterns } from '../patterns.list';
import { IStyle, SketchConfiguration } from '../../index';

function contentGenerator(style: IStyle): string {
    const { primary, secondary, tertiary } = style;

    return `
        @grid: 5 / 100%;

        background: ${randomIn(primary, secondary, tertiary)};
        animation: transform @r(1, 2)s ease @r(1, 2)s infinite;

        @keyframes transform {
            0%, 35% 100% { transform: scale(1) rotate(0deg); }
            10%, 60% { transform: scale(@r(0.6, 0.9)) rotate(@r(-15, 15)deg); }
        }

        ${randomIn(...patterns)(primary, randomIn(secondary, tertiary))}
    `;
}

export const animateStripe: SketchConfiguration = {
    contentGenerator,
};
