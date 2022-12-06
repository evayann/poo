export const sketches = [
  ({ primary, bgColor, shapeColor, stroke, angle, length }) => `    
  @grid: 1 / 40vmin;

  :doodle {
    @shape: drop;
    background-color: ${shapeColor};
  }

  :doodle > * {
    @shape: drop;

    background-color: ${bgColor};
    transform: scale(0.9);
  }

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
  @grid: 7 / 40vmin;

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
  }

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
  () => `
  :doodle {
    @grid: 18 / 100vmax;
    background: #0a0c27;
  }
  --hue: calc(180 + 1.5 * @row * @col);
  background: hsl(var(--hue), 50%, 70%);
  margin: -.5px;
  transition: @r(.5s) ease;
  clip-path: polygon(@pick(
    '0 0, 100% 0, 100% 100%',
    '0 0, 100% 0, 0 100%',
    '0 0, 100% 100%, 0 100%',
    '100% 0, 100% 100%, 0 100%'
  ));
  `,
  () => `
  :doodle {
    @grid: 10 / 100%;
  }
  background: @pick(
    #ff0198, #8156a8, #ff6d00, #ff75e4
  );
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
  }`,
];
