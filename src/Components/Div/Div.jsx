import React from 'react';
import { DivType } from './Div.styles';

const Div = ({ children, ...props }) => {
  return <DivType {...props}>{children}</DivType>;
};

export default Div;
