import React from 'react';
import { DivType } from './Div.styles';
import { useNode } from '@craftjs/core';
import SectionSettings from '../Container/SectionSettings';
import { genProps } from '../Container/Container';

const Div = ({ children, ...props }) => {
  const {
    connectors: { connect, drag },
    isActive,
  } = useNode((store) => ({ isActive: store.events.selected }));
  return (
    <DivType variant={isActive && 'selected'} ref={(ref) => connect(drag(ref))} {...props}>
      {children}
    </DivType>
  );
};

Div.craft = {
  props: genProps,
  related: {
    settings: SectionSettings,
  },
};

export default Div;
