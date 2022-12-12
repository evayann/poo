import { toRgb } from '../../../shared/color';
import { random, randomIn } from '../../../shared/random';
import { range, gen } from '../../../shared/array';
import { IStyle, SketchConfiguration } from '../../index';

function contentGenerator(style: IStyle): string {
    const { primary, secondary, tertiary } = style;

    const defineMetaballs = (nb: number) => {
        const radiusSum = range(nb)
            .map((i) => `ball${i}.r`)
            .join('+');

        const colorSum = range(nb)
            .map((i) => `ball${i}.rgb`)
            .join('+');

        return `
            MetaBall ${gen(nb, (i) => `mb${i}`)};

            ${gen(
                nb,
                (i) => `
              vec2 mbs${i} = vec2(${random(10)}, ${random(10)});
              mb${i}.pos = 0.7 * sin(iTime * ${random(0.3, 3)} + mbs${i} + ${random(1, 6)}); 
              mb${i}.r = ${random(0.5, 2)}; 
              mb${i}.col = vec3(${toRgb(randomIn(primary, secondary, tertiary), true)});
              vec4 ball${i} = BallSDF(mb${i}, uv);
            `
            ).join('\n')}

            float total = ${radiusSum};
            float threshold = total > 4.5 ? 1. : 0.;
            vec3 color = (${colorSum}) / total;
            color *= threshold;
            return color;
        `;
    };

    return `
        @grid: 1 / 100%; 

        background: @shaders(
          fragment {
            struct MetaBall{
              float r;
              vec2 pos;
              vec3 col;
            };

            vec4 BallSDF(MetaBall ball, vec2 uv){
              float dst = ball.r / length(uv - ball.pos);
              return vec4(ball.col * dst, dst);
            }

            vec3 renderMetaBall(vec2 uv){
              ${defineMetaballs(Math.floor(random(3, 6)))}
            }

            void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
              vec2 uv = (2.0 * fragCoord.xy - iResolution.xy) / iResolution.y;
              vec3 col = renderMetaBall(uv);
              fragColor = vec4(col,1.0);
            }
          }
        );
    `;
}

export const metaballs: SketchConfiguration = {
    contentGenerator,
};
