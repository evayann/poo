import { IStyle, SketchConfiguration } from '@sketches';

function contentGenerator(style: IStyle): string {
    const { primary } = style;

    return `
        @grid: 16 / 100%; 

        background-color: ${primary};
        
        animation: lerp 2s linear infinite;
        
        @keyframes lerp {
        0%, 100% { 
            transform:
            scale(@rn(0.25, 1, 3)) 
            skew(@rn(-50deg, 50deg, 3));
        }
        50% { 
            transform:
            scale(@rn(0.25, 1, 3)) 
            skew(@rn(-50deg, 50deg, 3));
        }
        }
    `;
}

export const fakePerlin: SketchConfiguration = {
    contentGenerator,
};
