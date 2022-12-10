import { random, randomIn } from "../shared/random";
  
export function getStyle() {
  return {
    primary: randomIn('#AF42AE', '#07A0C3'),
    secondary: randomIn('#283D4C', '#3D7A84'),
    tertiary: randomIn('#CF984E', '#B46B56'),
    bgColor: randomIn('#D6BBC0', '#F0C808'),
    shapeColor: randomIn('#C585B3', '#DD1C1A'),

    stroke: random(0.2, 2),
    length: random(50, 100),
    angle: random(10, 30),
  };
}
