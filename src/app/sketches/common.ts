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

    animation: random 2s @r(.6s) infinite;
    
    background: @p(${primary}, ${secondary}, ${tertiary});

    @shape: @p(${shapes});

    @keyframes random {
      0%, 100% { transform: scale(1) rotate(0deg); @shape: @p(${shapes}); }
      10%, 60% { transform: scale(@r(0.6, 0.9)) rotate(@r(-15, 15)deg) translate(@r(-20, 20)%, @r(-20, 20)%); @shape: @p(${shapes}); }
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

    ::after {
      content: '';
      @size: 100%;
      ${random(patterns)(primary, random([secondary, tertiary]))}
      // clip-path: @shape(
      //   points: @p(3, 4, 5);
      //   scale: @rand(0.8, 1.5);
      //   move: @r(-1, 1), @r(-1, 1);
      // );
    }
  `,
];
