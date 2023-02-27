import React from 'react';
import { Main } from './Container.styles';
import { useNode } from '@craftjs/core';

const SectionComponent = ({ children, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Main ref={(ref) => connect(drag(ref))} {...props}>
      {children}
    </Main>
  );
};

export default SectionComponent;
