import { random } from '../../../shared/random';
import { IStyle, SketchConfiguration } from '../../index';

function contentGenerator(style: IStyle): string {
    const { primary, secondary, tertiary, shapeColor } = style;

    return `
        @grid: 1 / 100%; 

        background: @shaders(
            texture_0 {
                background: linear-gradient(
                    @r(360deg),
                    @stripe.@m20.@pn(${primary}, ${secondary}, ${tertiary}, ${shapeColor}) 
                );
            }
            fragment {
                #define TAU (2. * 3.141593)
                void main() {
                    vec2 ur = u_resolution;
                    vec2 c = vec2(${random(0.325, 0.625)}, ${random(0.325, 0.625)});
                    vec2 p = gl_FragCoord.xy / ur.xy - c;
                    float r = length(p);
                    float len = length(p * vec2(ur.x / ur.y, 1.));
                    float angle = atan(p.y, p.x) 
                        + TAU * smoothstep(.75, 0., len) 
                        + cos(u_time);
                    vec2 coords = c + vec2(r * cos(angle + u_time), r * sin(angle));
                    FragColor = texture(texture_0, coords);
                }
            }
        );
    `;
}

export const stripeDistortion: SketchConfiguration = {
    contentGenerator,
};
