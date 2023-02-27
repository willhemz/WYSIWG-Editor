import React from 'react';
import { DivType } from './Div.styles';
import { useNode } from '@craftjs/core';

const Div = ({ children, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <DivType ref={(ref) => connect(drag(ref))} {...props}>
      {children}
    </DivType>
  );
};

export default Div;
