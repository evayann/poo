import { random } from '../core/utilities';
import { patterns } from './patterns';
import { mathShapes, shapes } from './shapes';

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
  ({ primary, bgColor, shapeColor, stroke, angle, length }) => `    
    @grid: 1 / 100%;

    ${shape(shapeColor, bgColor)}

    background-repeat: no-repeat;
    background: @svg(
      svg {
        viewBox: -50 -60 100 100;
        stroke: ${primary};
        stroke-width: ${stroke};
        fill: none;

        polyline {
          stroke-dasharray: 6500;
          stroke-dashoffset: 6500;
          points: @m${length}.@Plot(
            turn: ${angle};
            r: t;
          );

          animate {
            dur: 10s;
            repeatCount: 1000000;
            attributeName: stroke-dashoffset;
            values: 6500;0;6500;
          }
        }
      }
    );
  `,
  ({ primary, bgColor, shapeColor, stroke, angle, length }) => `
    @grid: 7 / 100%;

    ${shape(shapeColor, bgColor)}

    @even {
      @shape: hypocycloid 4;
      background: ${primary};
      transform: scale(2) rotate(0deg);
      animation: rotate 5s infinite;
    }

    @keyframes rotate {
      from { transform: scale(${1 + stroke}) rotate(0deg); }  
      to { transform: scale(${1 + stroke}) rotate(90deg); }  
    }
  `,
  ({ primary, bgColor, shapeColor, stroke, angle, length }) => `
    @grid: 18 / 100%;

    ${shape(shapeColor, bgColor)}

    --hue: calc(180deg + 1.5 * @row * @col);
    background: ${primary};
    filter: hue-rotate(calc(180deg + 1.5deg * @row * @col));
    margin: -.5px;
    transition: @r(.5s) ease;
    clip-path: polygon(@p(
      '0 0, 100% 0, 100% 100%',
      '0 0, 100% 0, 0 100%',
      '0 0, 100% 100%, 0 100%',
      '100% 0, 100% 100%, 0 100%'
    ));
  `,
  ({ primary, bgColor, shapeColor, stroke, angle, length }) => `
    @grid: 10 / 100%;

    ${shape(shapeColor, bgColor)}

    background: ${rdmColor(primary, shapeColor)};
    transform: translate(
      @rand(-50vw, 50vw),
      @rand(-50vh, 50vh)
    );
    @size: 3.5vmin;
    @shape: heart;
    @place-cell: 50% 50%;
    animation-name: explosion;
    animation-iteration-count: infinite;
    animation-direction: reverse;
    animation-duration: calc(@r(2s, 5s, .1));
    animation-delay: calc(@r(-5s, -1s, .1));
    animation-timing-function:
      cubic-bezier(.84, .02, 1, 1);
    @keyframes explosion {
      0% { opacity: 0; }
      70% { opacity: 1; }
      100% { transform: translate(0, 0); }
    }
  `,
  ({ primary, bgColor, shapeColor, stroke, angle, length }) => `
    @grid: 16 / 100%; 

    ${shape(shapeColor, bgColor)}

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
  `,
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

    ${random(patterns)(primary, random([secondary, tertiary]))}
  `,
  ({ primary, secondary, tertiary, bgColor, shapeColor }) => `
    @grid: 6x1 / 100%;

    ${shape(shapeColor, bgColor)}

    @place: @plot(r: .45; dir: auto -125);
    @size: 50%;

    border-radius: 50%;
    box-shadow: 45px 0 0 -10px ${random([primary, secondary, tertiary])};
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
    box-shadow: 0 0 @r(10)vmin @r(1, 5)vmin ${rdmColor(
      primary,
      secondary,
      tertiary
    )};

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
    const c1 = random(colors);
    const c2 = random(colors.filter((c) => c !== c1));
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
      radial-gradient(${rdmColor(
        primary,
        secondary,
        tertiary
      )} 50%, transparent 0) 
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
];
