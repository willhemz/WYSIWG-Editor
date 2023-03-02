import React from 'react';
import { DivType } from './Div.styles';
import { useEditor, useNode } from '@craftjs/core';
import SectionSettings from '../Container/SectionSettings';
import { genProps } from '../Container/Container';

const Div = ({ children, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  const { enabled } = useEditor((store) => ({ enabled: store.options.enabled }));
  return (
    <DivType variant={enabled && 'selected'} ref={(ref) => connect(drag(ref))} {...props}>
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
