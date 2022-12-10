export function random(min?: number, max?: number): number {
  // Todo implmeent custom pseudo rdm to use seed
  const rand = Math.random();
  if (typeof min === 'undefined') {
    return rand;
  } else if (typeof max === 'undefined') {
    return rand * min;
  }
  const m = min as number;
  return m + rand * (max - m);
}

export function randomInt(min: number, max?: number): number {
  const rand = random();
  return Math.floor(max ? min + (max - min) * rand : min * rand);
}

export function randomIn<T>(...list: T[]): T {
  return list[randomInt(list.length)];
}