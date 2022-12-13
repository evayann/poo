import { IStyle, SketchConfiguration } from '../../index';
import p5 from 'p5';

function contentGenerator(style: IStyle): unknown {
    return (nativeElement: HTMLElement): p5 => {
        return new p5((s: p5) => {
            let speed = 1;
            let nbSegment = 16;
            let strokeSize = 3;
            let strokeColor;
            let time = 0;

            s.setup = () => {
                console.log('toto');

                s.createCanvas(100, 100);
                strokeColor = p5.color('#bb5151');
                p5.noFill();
            };

            s.draw = () => {
                s.clear();
                s.background('black');
                s.translate(50, 50);
                s.stroke(strokeColor);
                s.strokeWeight(strokeSize);
                const size = Math.min(50, 50) - 20;
                s.circle(0, 0, 2 * size);
                let [px, py]: [number, number] = [0, 0];
                for (let i = 0; i <= size; i += size / nbSegment) {
                    const factor: number = (2 + speed) * time * (1 + s.dist(0, 0, px, py) / size);
                    const [x, y] = [s.cos(factor) * i, s.sin(factor) * i];
                    s.line(px, py, x, y);
                    [px, py] = [x, y];
                }
                time += 0.1;
            };
        }, nativeElement);
    };
}

// todo type
export const p5test: any = {
    contentGenerator,
};
