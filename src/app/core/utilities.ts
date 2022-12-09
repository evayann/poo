export function random(min?: number | any[], max?: number) {
  const rand = Math.random();
  if (typeof min === 'undefined') {
    return rand;
  } else if (typeof max === 'undefined') {
    if (min instanceof Array) {
      const list: any[] = min;
      return list[Math.floor(rand * list.length)];
    }
    return rand * min;
  }
  const m = min as number;
  return m + rand * (max - m);
}

export const range = (min: number, max?: number) => max ? [...Array(max - min).keys()].map(x => min + x) : [...Array(min).keys()];
export const gen = (nb: number, generator: (i: number, nb: number) => unknown) => range(nb).map(i => generator(i, nb));
  
export function getStyle() {
  return {
    primary: random(['#AF42AE', '#07A0C3']),
    secondary: random(['#283D4C', '#3D7A84']),
    tertiary: random(['#CF984E', '#B46B56']),
    bgColor: random(['#D6BBC0', '#F0C808']),
    shapeColor: random(['#C585B3', '#DD1C1A']),

    stroke: random(0.2, 2),
    length: random(50, 100),
    angle: random(10, 30),
  };
}
