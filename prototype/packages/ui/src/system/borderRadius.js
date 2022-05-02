import { style, compose } from 'styled-system';

export const borderTopLeftRadius = style({
  prop: 'borderTopLeftRadius',
  key: 'radii',
});

export const borderTopRightRadius = style({
  prop: 'borderTopRightRadius',
  key: 'radii',
});

export const borderRadiusBottomRight = style({
  prop: 'borderBottomRightRadius',
  key: 'radii',
});

export const borderBottomLeftRadius = style({
  prop: 'borderBottomLeftRadius',
  key: 'radii',
});

export const borderRadius = style({
  prop: 'borderRadius',
  key: 'radii',
});

const combined = compose(
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderRadiusBottomRight,
  borderBottomLeftRadius
);

export default combined;