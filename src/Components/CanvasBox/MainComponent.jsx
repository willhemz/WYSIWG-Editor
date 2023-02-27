import React from 'react';
import { Main } from './MainComponent.styles';
import { useNode } from '@craftjs/core';

const MainComponent = ({ children, ...props }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <Main ref={(ref) => connect(ref)} {...props}>
      {children}
    </Main>
  );
};

export default MainComponent;
