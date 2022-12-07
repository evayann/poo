import { random } from '../core/utilities';
import { patterns } from './patterns';
import { shapes } from './shapes';

const shape = (shapeColor, bgColor) => `
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

    background: @p(${primary}, ${shapeColor});
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
    animation-duration: calc(@rand(2s, 5s, .1));
    animation-delay: calc(@rand(-5s, -1s, .1));
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
    
    background: @p(${primary}, ${secondary}, ${tertiary});

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

    background: @p(${primary}, ${secondary}, ${tertiary});
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
      hsla(0, 0%, 100%, @rand(0.5, 1)),
      hsla(calc(@rand(90) * @i), 70%, 65%)
    );

    // transform: rotate(calc(@rand(60deg) * @i)); 
    // z-index: calc(@I - @i);

    @odd {
      mix-blend-mode: screen;
      // animation: @r(3, 6)s rotate linear infinite;
      // @keyframes rotate {
      //   from { transform: rotate(0deg); }
      //   to { transform: rotate(360deg); }
      // }
    }

    @even {
      mix-blend-mode: multiply;
      animation: @r(1, 3)s rotate linear infinite; 
    }

    @keyframes rotate {
      from { rotate: 0deg; }
      to { rotate: 360deg; }
    }
  `,
];
