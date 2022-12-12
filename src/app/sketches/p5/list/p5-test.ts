import { IStyle, SketchConfiguration } from '../../index';
import * as p5 from 'p5';

function contentGenerator(style: IStyle): unknown {
    let xoff = 0;

    const setBackground = (s: p5) => s.background(51);
    const setFill = (s: p5) => s.fill(2, 165, 255);

    console.log('totox');

    return (nativeElement: HTMLElement): p5 => {
        return new p5((s: p5) => {
            s.setup = () => {
                console.log('toto');

                s.createCanvas(400, 400);
            };

            s.draw = () => {
                setBackground(s);
                setFill(s);

                let x = s.map(s.noise(xoff), 0, 1, 0, s.width);

                xoff += 0.01;

                s.ellipse(x, 200, 24, 24);
            };
        }, nativeElement);
    };
}

// todo type
export const p5test: any = {
    contentGenerator,
};
