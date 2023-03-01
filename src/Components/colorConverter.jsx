export const colorToRgba = (color) => {
  let { r, g, b, a } = color;

  if (a === 'NaN') a = 1;
  return `rgba(${r},${g},${b},${a})`;
};
