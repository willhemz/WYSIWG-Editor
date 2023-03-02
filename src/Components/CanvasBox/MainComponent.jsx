import React from 'react';
import { Main } from './MainComponent.styles';
import { useEditor, useNode } from '@craftjs/core';
import SectionSettings from '../Container/SectionSettings';

const MainComponent = ({ children, ...props }) => {
  const {
    connectors: { connect },
    isActive,
  } = useNode((store) => ({ isActive: store.events.selected }));
  const { enabled } = useEditor((store) => ({ enabled: store.options.enabled }));
  return (
    <Main variant={(enabled || isActive) && 'selected'} ref={(ref) => connect(ref)} {...props}>
      {children}
    </Main>
  );
};

MainComponent.craft = {
  props: {
    height: '100%',
    width: '100%',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  related: {
    settings: SectionSettings,
  },
};

export default MainComponent;
