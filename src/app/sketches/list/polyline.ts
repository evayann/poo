export const polyline = ({ primary, bgColor, shapeColor, stroke, angle, length }) => `    
    @grid: 1 / 100%;

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
    );`