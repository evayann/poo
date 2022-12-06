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
