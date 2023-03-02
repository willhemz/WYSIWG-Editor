import React from 'react';
import { Section } from './Container.styles';
import { useNode, useEditor } from '@craftjs/core';
import SectionSettings from './SectionSettings';

const SectionComponent = ({ children, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  const { enabled } = useEditor((store) => ({ enabled: store.options.enabled }));

  return (
    <Section variant={enabled && 'selected'} ref={(ref) => connect(drag(ref))} {...props}>
      {children}
    </Section>
  );
};

export const genProps = {
  width: '100%',
  height: 'auto',
  display: 'flex',
  wrap: 'nowrap',
  rgbColor: '{r:0,g:0,b:0,1}',
  rgbBackground: '{r:255,g:255,b:255,1}',
  color: 'rgba(0,0,0,1)',
  background: 'rgba(255,255,255,1)',
};
SectionComponent.craft = {
  props: genProps,
  related: {
    settings: SectionSettings,
  },
};

export default SectionComponent;
