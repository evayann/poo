import { getStyle } from '../../core/utilities';
import { IStyle, Sketch } from '../index';

export class DoodleSketch extends Sketch {
    parse(seed: number): string {
        const style: IStyle = getStyle();
        const parameters: unknown = this.sketchConfiguration.parametersGenerator
            ? this.sketchConfiguration.parametersGenerator()
            : {};
        return `
            ${this.sketchShape(style.shapeColor, style.bgColor)}
            ${this.sketchConfiguration.contentGenerator(style, parameters)}
            `;
    }

    private sketchShape(shapeColor: string, bgColor: string): string {
        return `
            :doodle {
                @shape: drop;
                background-color: ${shapeColor};
            }
            
            :doodle > * {
                @shape: drop;
                
                background-color: ${bgColor};
                
                top: 5%;
                left: 5%;
                width: 90%;
                height: 90%;
            }`;
    }
}
