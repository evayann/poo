import { gen, range, remove } from '../shared/array';
import { random, randomIn } from '../shared/random';
import { patterns } from './doodle/patterns.list';
import { mathShapes, shapes } from './doodle/shapes.list';

const shape = (shapeColor: string, bgColor: string) => `
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

const rdmColor = (...colors: string[]) => `@p(${colors.join(', ')})`;

export const sketches = [
    ({ primary, secondary, tertiary, bgColor, shapeColor }) => `
    :doodle {
      @grid: 8 / 100%;
    }
    
    ${shape(shapeColor, bgColor)}

    animation: random 10s @r(.6s) infinite;
    
    background: ${rdmColor(primary, secondary, tertiary)};

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
  `,
    ({ primary, secondary, tertiary, bgColor, shapeColor }) => `
    @grid: 5 / 100%;

    ${shape(shapeColor, bgColor)}

    background: ${rdmColor(primary, secondary, tertiary)};
    animation: transform @r(1, 2)s ease @r(1, 2)s infinite;

    @keyframes transform {
      0%, 35% 100% { transform: scale(1) rotate(0deg); }
      10%, 60% { transform: scale(@r(0.6, 0.9)) rotate(@r(-15, 15)deg); }
    }

    ${randomIn(...patterns)(primary, randomIn(secondary, tertiary))}
  `,
    ({ primary, secondary, tertiary, bgColor, shapeColor }) => `
    @grid: 6x1 / 100%;

    ${shape(shapeColor, bgColor)}

    @place: @plot(r: .45; dir: auto -125);
    @size: 50%;

    border-radius: 50%;
    box-shadow: 45px 0 0 -10px ${randomIn(primary, secondary, tertiary)};
    filter: hue-rotate(calc(90deg / @I * @i));

    animation: colors 5s ease-in-out infinite;

    @keyframes colors {
      0%, 100% { filter: hue-rotate(calc(90deg / @I * @i)); }
      50% { filter: hue-rotate(calc(270deg / @I * @i)); }
    }
  `,
    ({ primary, secondary, tertiary, bgColor, shapeColor }) => `
    @grid: 16x1 / 100%;

    ${shape(shapeColor, bgColor)}

    @shape: bud 7;
    @place-cell: center;
    @size: calc(100% - @i * (100% / @I));

    background: radial-gradient(
      ${rdmColor(primary, secondary, tertiary)}@hex(@r(0, 255)),
      hsla(calc(@r(90) * @i), 70%, 65%)
    );

    @odd {
      mix-blend-mode: screen;
      animation: rotate-left @r(3s, 10s) linear infinite;
    }

    @even {
      mix-blend-mode: multiply;
      animation: rotate-right @r(3s, 10s) linear infinite; 
    }

    @keyframes rotate-left {
      from { rotate: 360deg; }
      to { rotate: 0deg; }
    }

    @keyframes rotate-right {
      from { rotate: 0deg; }
      to { rotate: 360deg; }
    }
  `,
    ({ primary, secondary, tertiary, bgColor, shapeColor }) => `
    @grid: 5 / 100%;

    ${shape(shapeColor, bgColor)}

    border-radius: @r(35%);
    @random(.2) {
      @shape: @p(${mathShapes});
    }
    background-color: ${rdmColor(primary, secondary, tertiary)};

    animation: filter @r(4, 10)s infinite;

    @keyframes filter {
      0%, 100% {
        filter: @svg-filter(
          feTurbulence {
            type: fractalNoise;
            baseFrequency: @r(.01, 0.02) .5;
          }
          feDisplacementMap {
            in: SourceGraphic;
            scale: @r(40, 60);
          }
        );
      }
      50% {
        filter: @svg-filter(
          feTurbulence {
            type: fractalNoise;
            baseFrequency: @r(.1, .2) @r(1, 2);
          }
          feDisplacementMap {
            in: SourceGraphic;
            scale: @r(80, 100);
          }
        );
      }
    }
  `,
    ({ primary, secondary, tertiary, bgColor, shapeColor }) => `
    :doodle {
      @grid: 1 / 100%;
    }

    ${shape(shapeColor, bgColor)}

    background-image: @svg(
      viewBox: .5 .5 10 10;
      stroke: #1B2D37;
      stroke-width: .04;
    
      rect*10x10 {
        fill: ${rdmColor(primary, secondary, tertiary)};
        x: calc(@nx - @r(.85, 1) / 2);
        y: calc(@ny - @lr / 2);
        width, height: @lr;
        filter: url(#test);
      }
    
      filter#test {
        feTurbulence {
          type: fractalNoise;
          baseFrequency: 0.1 2;
    
          animate {
            attributeName: baseFrequency;
            values: 0;.1;0.5,2;0.1,2;
            from: 0;
            to: 100;
            dur: 10s;
            repeatCount: indefinite;
          }
        }
        
        feDisplacementMap {
          in: SourceGraphic;
          animate {
            attributeName: scale;
            values: 1;0.2;0.7;0;2;3;1;
            dur: 10s;
            repeatCount: indefinite;
          }
        }
      }
    );
  `,
    ({ primary, secondary, tertiary, bgColor, shapeColor }) => `
    :doodle {
      @grid: 5x1 / 100%;
    }

    ${shape(shapeColor, bgColor)}

    position: absolute;
    top: @r(40, 60)%;
    left: @r(30, 70)%;

    @size: 0;
    padding-left: @r(15)%;
    box-shadow: 0 0 @r(10)vmin @r(1, 5)vmin ${rdmColor(primary, secondary, tertiary)};

    filter: @svg-filter(
      feTurbulence {
        type: fractalNoise;
        baseFrequency: 0.01;
        numOctaves: 10;
      }
      feDisplacementMap {
        in: SourceGraphic;
        scale: 180;
      }
    );

    animation: translate 10s infinite;

    @keyframes translate {
      from { 
        top: @r(40, 60)%;
        left: @r(30, 70)%;
      }
      to { 
        top: @r(40, 60)%;
        left: @r(30, 70)%;
      }    
    }
  `,
    ({ primary, secondary, tertiary, bgColor, shapeColor }) => {
        const colors = [primary, secondary, tertiary, shapeColor];
        const c1 = randomIn(colors);
        const c2 = randomIn(remove(c1, colors));
        return `
    @grid: 50x1 / 100%;

    ${shape(shapeColor, bgColor)}

    @place-cell: center;
    @size: 100%;
    
    ::before{
      content: "";
      @size: @r(10%);
      border: 1px solid white;
      background: @p(none, ${rdmColor(
          primary,
          secondary,
          tertiary
      )}, linear-gradient(to @p(bottom, left), @stripe(${c1}, ${c2} 1px, ${c1}, ${c2} 1px, ${c1}, ${c2} 1px, ${c1}, ${c2} 1px, ${c1}, ${c2} 1px, ${c1})));
      border-radius: @p(0, 50%);
      position: absolute;
      top: @r(100%);
      left: @r(100%);
      animation: floatingUpDown @r(1.5s, 5s) @r(1.5s) linear infinite alternate; 
    }
    
    ::after {
      content: "";
      height: @r(1%);
      width: @r(3%, 14%);
      background: ${rdmColor(primary, secondary)};
      position: absolute;
      top: @r(100%);
      left: @r(100%);
      animation: floatingStickAnim @r(1.5s, 5s) @r(1.5s) linear infinite alternate; 
      transform: translateX(300%);
    }
    
    @keyframes floatingUpDown {
      100% {
        transform: translateY(-50%) rotateZ(@r(-5, 5)deg);
      }
    }
    
    @keyframes floatingStickAnim {
      100% {
        transform: translateX(-300%);
      }
    }
  `;
    },
    ({ primary, secondary, tertiary, bgColor, shapeColor }) => `
    @grid: 30x1 / 100%;
    --deg: @p(-180deg, 180deg);

    ${shape(shapeColor, bgColor)}

    :container {
      perspective: 20vmin;
    }

    :after, :before {
      content: '';
      background: ${rdmColor(primary, secondary, tertiary)}; 
      @place-cell: @r(100%) @r(100%);
      @size: @r(5px, 20px);
      @shape: heart;
    }

    @place-cell: center;
    @size: 100%;

    box-shadow: @m2(0 0 50px ${rdmColor(primary, secondary, tertiary)});
    background: @m100(
      radial-gradient(${rdmColor(primary, secondary, tertiary)} 50%, transparent 0) 
      @r(-20%, 120%) @r(-20%, 100%) / 1px 1px
      no-repeat
    );

    will-change: transform, opacity;
    animation: scale-down 12s linear infinite;
    animation-delay: calc(-12s / @I * @i);

    @keyframes scale-down {
      0%, 95.01%, 100% {
        transform: translateZ(0) rotate(0);
        opacity: 0;
      }
      10% { 
        opacity: 1; 
      }
      95% {
        transform: 
          translateZ(-100vmin) rotateZ(@var(--deg));
      }
    }
  `,
    ({ primary, secondary, tertiary, bgColor, shapeColor }) => `
  @grid: 19 / 100%;

  ${shape(shapeColor, bgColor)}

  border: 1px solid #1b1b1c;
  transform-origin: center;
  
  --rotation-delay: calc(((@abs(@abs(@row - @size-row / 1.75) + @abs(@col - @size-col / 2) - @size-col) / @size-col) - 1) * -1s);  

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
  `,
    ({ primary, secondary, tertiary, bgColor, shapeColor }) => `
    @grid: 10 / 100%;

    ${shape(shapeColor, bgColor)}
    
    animation: bounce linear @r(7s, 15s) @r(-1s, -5s) infinite;
    opacity: @r(0.3, 1);
    @place-cell: @r(100%) @r(100%);

    :after {
      content: @p(🍭, 🍫, 🧁, 🍪);
      position: absolute;
      @place-cell: @r(100%) @r(100%);
      font-size: @r(15px, 25px);
      z-index: @p(1, 2);
      transform: rotate(@r(360deg));
    }

    @keyframes bounce {
      0% {
        transform: translateY(@r(-101vh, -110vh));
      }
      100% {
        transform: translateY(@r(101vh, 110vh));
      }
    }
  `,
    ({ primary, secondary, tertiary, bgColor, shapeColor }) => `
    @grid: 10x1 / 100%;

    ${shape(shapeColor, bgColor)}

    @place-cell: center;
    @shape: hypocycloid 6;
    @size: calc(100% / @I * @i);

    @size: calc(90% / @I * @i);
    background-color: #60569e;
    background-color: hsla(
      calc(20 * @i), 70%, 68%,
      calc(3 / @i * .8)
    );

    z-index: calc(10 + (@I - @i));
    transform: rotate(calc(@i * 30deg));
    animation: loop 5s ease infinite;
    animation-delay: calc(@i * 500ms);

    @keyframes loop {
      0 { transform: rotate(calc(@i * 30deg)); }
      5% { transform: rotate(calc(@i * 30deg + 60deg)); }
      10% { transform: rotate(calc(@i * 30deg + 60deg));}
      15% { transform: rotate(calc(@i * 30deg)); }
      20% { transform: rotate(calc(@i * 30deg)); }
      25% { transform: rotate(calc(@i * 30deg + 60deg)); }
      30% { transform: rotate(calc(@i * 30deg + 60deg));}
      35% { transform: rotate(calc(@i * 30deg)); }
      100% { transform: rotate(calc(@i * 30deg)); }
    }
  `,
    ({ primary, secondary, tertiary, bgColor, shapeColor }) => `
    @grid: 1 / 100%; 

    ${shape(shapeColor, bgColor)}

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
  `,
    ({ primary, secondary, tertiary, bgColor, shapeColor }) => {
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
          mb${i}.col = vec3(${random()}, ${random()}, ${random()});
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

      ${shape(shapeColor, bgColor)}

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
    },
];

// void main() {
//   FragColor = texture(texture_0, gl_FragCoord.xy / u_resolution.xy);
// }
