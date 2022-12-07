function grid(fg, bg) {
  return `
    background-image: 
      linear-gradient(135deg, ${fg} 25%, transparent 25%),
      linear-gradient(225deg, ${fg} 25%, transparent 25%),
      linear-gradient(45deg, ${fg} 25%, transparent 25%),
      linear-gradient(315deg, ${fg} 25%, ${bg} 25%);
  `;
}

export const patterns = [grid];

// --pattern-1: (
//   --fg: @p(${primary}, ${secondary}, ${tertiary});
//   --bg: @p(${primary}, ${secondary}, ${tertiary});
//   background-image: linear-gradient(135deg, @var(--fg) 25%, transparent 25%), linear-gradient(225deg, @var(--fg) 25%, transparent 25%), linear-gradient(45deg, @var(--fg) 25%, transparent 25%), linear-gradient(315deg, @var(--fg) 25%, @var(--bg) 25%);
//   background-position: 10px 0, 10px 0, 0 0, 0 0;
//   background-size: 20px 20px;
//   background-repeat: repeat;
//   transform: rotate(@rand(360)deg);
// );
// --pattern-2: (
//   --fg: @p(${primary}, ${secondary}, ${tertiary});
//   --bg: @p(${primary}, ${secondary}, ${tertiary});
//   background-image: linear-gradient(0deg, @var(--bg) 50%, @var(--fg) 50%);
//   background-size: 22px 22px;
//   transform: rotate(@rand(360)deg);
// );
// --pattern-3: (
//   --fg: @p(${primary}, ${secondary}, ${tertiary});
//   --bg: @p(${primary}, ${secondary}, ${tertiary});
//   background-image: repeating-linear-gradient(45deg, @var(--fg) 25%, transparent 25%, transparent 75%, @var(--fg) 75%, @var(--fg)), repeating-linear-gradient(45deg, @var(--fg) 25%, @var(--bg) 25%, @var(--bg) 75%, @var(--fg) 75%, @var(--fg));
//   background-position: 0 0, 10px 10px;
//   background-size: 20px 20px;
//   transform: rotate(@rand(360)deg);
// );
// --pattern-4: (
//   --fg: @p(${primary}, ${secondary}, ${tertiary});
//   --bg: @p(${primary}, ${secondary}, ${tertiary});
//   background-image: linear-gradient(45deg, var(--fg) 50%, var(--bg) 50%);
//   background-size: 14px 14px;
//   transform: rotate(@rand(360)deg);
// );
