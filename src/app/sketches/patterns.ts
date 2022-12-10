function rhombus(fg, bg) {
  return `
    background-image: 
      linear-gradient(135deg, ${fg} 25%, transparent 25%),
      linear-gradient(225deg, ${fg} 25%, transparent 25%),
      linear-gradient(45deg, ${fg} 25%, transparent 25%),
      linear-gradient(315deg, ${fg} 25%, ${bg} 25%);
  `;
}

function halfStripe(fg, bg) {
  return `
    background-image: linear-gradient(@stripe(${fg}, ${bg}, ${fg}, ${bg}));
  `;
}

function a(fg, bg) {
  return `
    background-image: repeating-linear-gradient(45deg, ${fg} 25%, transparent 25%, transparent 75%, ${fg} 75%, ${fg}, repeating-linear-gradient(45deg, ${fg} 25%, ${bg} 25%, ${bg} 75%, ${fg} 75%, ${fg}));
  `;
}

export type Pattern = (fg: string, bg: string) => string;
export const patterns: Pattern[] = [rhombus, halfStripe];
