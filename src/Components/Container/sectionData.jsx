export const sectionData = [
  { id: 1, name: 'width', value: 'Width' },
  { id: 2, name: 'height', value: 'Height' },
  { id: 3, name: 'padding', value: 'Padding' },
  { id: 4, name: 'background', value: 'Background' },
  { id: 5, name: 'display', value: 'Display' },
  { id: 6, name: 'flexDirection', value: 'Flex Direction' },
  { id: 7, name: 'flexWrap', value: 'Flex Wrap' },
  { id: 8, name: 'gap', value: 'Gap' },
  { id: 9, name: 'justifyContent', value: 'Justify Content' },
  { id: 10, name: 'alignItems', value: 'Align Items' },
];

export const objPadding = [
  { id: 1, name: 'paddingTop' },
  { id: 2, name: 'paddingRight' },
  { id: 3, name: 'paddingBottom' },
  { id: 4, name: 'paddingLeft' },
];

export const objMargin = [
  { id: 1, name: 'marginTop' },
  { id: 2, name: 'marginRight' },
  { id: 3, name: 'marginBottom' },
  { id: 4, name: 'marginLeft' },
];

export const colorItem = [
  { id: 1, name: 'color', value: 'Color' },
  { id: 2, name: 'background', value: 'Background' },
];

export const genProps = {
  width: '100',
  height: 'auto',
  display: 'flex',
  wrap: 'nowrap',
  color: 'rgba(0,0,0,1)',
  background: 'rgba(255,255,255,1)',
  bg: '{r:255,g:255,b:255,a:1}',
  uW: '%',
  uH: 'auto',
  uG: 'px',
  paddingTop: '10',
  paddingRight: '10',
  paddingBottom: '10',
  paddingLeft: '10',
  marginTop: '0',
  marginRight: '0',
  marginBottom: '0',
  marginLeft: '0',
  gap: 0,
  type: 'desktop',
};

const calcSize = (a, b) => {
  a = parseFloat(a);
  b = parseFloat(b);
  let x = 834.2083740234375;
  if (isDesktop) x;
  if (isTablet) x = 0.7 * x;
  if (isMobile) x = 0.4 * x;

  const y = (x * a) / b;
  return y;
};
