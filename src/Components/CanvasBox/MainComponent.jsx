import React from 'react';
import { Main } from './MainComponent.styles';
import { useEditor, useNode } from '@craftjs/core';
import SectionSettings from '../Container/SectionSettings';
import { genProps } from '../Container/Container';

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
    ...genProps,
    height: 100,
    width: 100,
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    uG: 'px',
    uH: '%',
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
  },
  related: {
    settings: SectionSettings,
  },
};

export default MainComponent;
