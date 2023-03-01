import React from 'react';
import { Main } from './Container.styles';
import { useNode } from '@craftjs/core';
import SectionSettings from './SectionSettings';

const SectionComponent = ({ children, ...props }) => {
  const {
    connectors: { connect, drag },
    isActive,
  } = useNode((store) => ({ isActive: store.events.selected }));
  return (
    <Main variant={isActive && 'selected'} ref={(ref) => connect(drag(ref))} {...props}>
      {children}
    </Main>
  );
};

export const genProps = {
  width: '100%',
  height: 'auto',
  display: 'flex',
  wrap: 'no-wrap',
};

SectionComponent.craft = {
  props: genProps,
  related: {
    settings: SectionSettings,
  },
};

export default SectionComponent;
