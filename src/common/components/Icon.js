import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  display: inline-block;
  vertical-align: middle;
`;

export function Icon({ name, width, height, size, ...props }) {
  if (!name) {
    throw new Error('You should be use name for icon!');
  }

  return (
    <Svg {...props} width={size || width} height={size || height}>
      <use xlinkHref={`#${name}`} />
    </Svg>
  );
}
