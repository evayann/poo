import { IStyle, SketchConfiguration } from '../../index';

function contentGenerator(style: IStyle): string {
    const { primary, secondary, tertiary } = style;

    return `
        @grid: 19 / 100%;
      
        border: 1px solid #1b1b1c;
        transform-origin: center;
        
        --rotation-delay: calc(((@abs(@abs(@y - @Y / 1.75) + @abs(@x - @X / 2) - @X) / @X) - 1) * -1s);  
      
        animation: scale ease-in 3s var(--rotation-delay) infinite alternate;
      
        @keyframes scale {
            0%, 100% {
                rotate: 0.1turn;
                background: hsl(0.1turn, 54%, 60%);
            }
            18% { 
                rotate: -0.2turn;
                background: hsl(-0.2turn, 54%, 60%);
            }
            38% { 
                rotate: 0.5turn;
                background: hsl(0.5turn, 54%, 60%);
            }
            42% { 
                rotate: 1.1turn;
                background: hsl(1.1turn, 54%, 60%);
            }
            58% { 
                rotate: 0.8turn;
                background: hsl(0.8, 54%, 60%);
            }
            68% { 
                rotate: 0.6turn;
                background: hsl(0.6turn, 54%, 60%);
            }
            78% { 
                rotate: 1.01turn;
                background: hsl(1.01turn, 54%, 60%);
            }
            95% {
                rotate: 0.5turn;
                background: hsl(0.5turn, 54%, 60%);
            }
        }
    `;
}

export const rainbowRotateGrid: SketchConfiguration = {
    contentGenerator,
};
