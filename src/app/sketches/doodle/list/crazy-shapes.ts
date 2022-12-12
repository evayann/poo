import { randomIn } from '../../../shared/random';
import { shapes } from '../shapes.list';
import { IStyle, SketchConfiguration } from '../../index';

function contentGenerator(style: IStyle): string {
    const { primary, secondary, tertiary } = style;

    return `
        @grid: 8 / 100%;
        
        animation: random 10s @r(.6s) infinite;
        
        background: ${randomIn(primary, secondary, tertiary)};

        @shape: @p(${shapes});

        @keyframes random {
            0%, 100% { 
                transform: scale(1) rotate(0deg);
                clip-path: @p(${shapes});
            }
            3% { 
                transform: scale(@p(0.6, 0.75, 0.9)) rotate(@r(-15, 15)deg) translate(@r(-20, 20)%, @r(-20, 20)%); 
            }
            5% { 
                transform: rotate(@r(-15, 15)deg) translate(calc(@lr + @r(-20, 20)%), calc(@lr + @r(-20, 20)%)); 
            }
            7% { 
                transform: rotate(@r(-15, 15)deg) translate(@r(-20, 20)%, @r(-20, 20)%); 
            }
            10% { 
                transform: scale(@r(0.6, 0.9));
                clip-path: @p(${shapes});
            }
        }
    `;
}

export const crazyShapes: SketchConfiguration = {
    contentGenerator,
};
