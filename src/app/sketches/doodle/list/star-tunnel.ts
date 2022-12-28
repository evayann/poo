import { IStyle, SketchConfiguration } from '../../index';

function contentGenerator(style: IStyle): string {
    const { primary, secondary, tertiary } = style;

    return `
        @grid: 1 / 100%; 

        background: @shaders(
          fragment {
            void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
              vec2 r = iResolution.xy;
              vec2 u = (fragCoord + fragCoord - r) / r.y;    
              fragColor.rgb *= 0.;
              
              for (float i; i < 20.; fragColor.rgb +=
                .004 / (abs(length(u * u) -i * .04) + .005)                    // shape distance
                * (cos(i + vec3(0, 1, 2)) + 0.4)                                // color
                * smoothstep(.35, .4,abs(abs(mod(iTime, 2.) - i * .1) - 1.))   // animation
                ) 
                  u *= mat2(cos((iTime + i++) * .03 + vec4(0, 33, 11, 0)));    // rotation
            }
          }             
        );
    `;
}

export const starTunnel: SketchConfiguration = {
    contentGenerator,
};
