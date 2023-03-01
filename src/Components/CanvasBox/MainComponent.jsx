import React from 'react';
import { Main } from './MainComponent.styles';
import { useNode } from '@craftjs/core';
import SectionSettings from '../Container/SectionSettings';

const MainComponent = ({ children, ...props }) => {
  const {
    connectors: { connect },
    isActive,
  } = useNode((store) => ({ isActive: store.events.selected }));
  return (
    <Main variant={isActive && 'selected'} ref={(ref) => connect(ref)} {...props}>
      {children}
    </Main>
  );
};

MainComponent.craft = {
  related: {
    settings: SectionSettings,
  },
};

export default MainComponent;
