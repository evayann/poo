const cssDoodleShape = (shapes) =>
  shapes
    .map((shape) =>
      typeof shape === 'string'
        ? shape
        : `@shape(${JSON.stringify(shape)
            .replace(/,/g, ';')
            .replace(/{|}|"|'/g, '')})`
    )
    .join(', ');

export const mathShapes = [
  'circle',
  'triangle',
  'pentagon',
  'hexagon',
  'octagon',
  'infinite',
];

export const animalShapes = ['whale', 'fish'];

export const miscShapes = ['heart', 'bean', 'vase', 'windmill'];

export const stick = {
  points: 90,
  scale: 0.15,
  rotate: 135,
  x: 'cos(t)*(8 - sin(y^2))',
  y: '1.5*sin(t)/cos(t)*cos(4t)%1',
};

export const flash = {
  points: 20,
  scale: 1.2,
  r: 'cos(222t)^224-.2',
};

export const shapes = cssDoodleShape([
  ...mathShapes,
  ...animalShapes,
  ...miscShapes,
  stick,
  flash,
]);
