import { remove } from '../../../shared/array';
import { randomIn } from '../../../shared/random';
import { IStyle, SketchConfiguration } from '../../index';

function contentGenerator(style: IStyle): string {
    const { primary, secondary, tertiary } = style;
    const colors = [primary, secondary, tertiary];
    const c1 = randomIn(...colors);
    const c2 = randomIn(remove(c1, colors));

    return `
      @grid: 30x1 / 100%;
      --deg: @p(-180deg, 180deg);

      :container {
        perspective: 20vmin;
      }

      :after, :before {
        content: '';
        background: @p(${primary}, ${secondary}, ${tertiary}); 
        @place-cell: @r(100%) @r(100%);
        @size: @r(5px, 20px);
        @shape: heart;
      }

      @place-cell: center;
      @size: 100%;

      box-shadow: @m2(0 0 50px ${c1});
      background: @m100(
        radial-gradient(${c2} 50%, transparent 0) 
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
    `;
}

export const squareTunnel: SketchConfiguration = {
    contentGenerator,
};
