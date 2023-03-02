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
  wrap: 'no-wrap',
};

SectionComponent.craft = {
  props: genProps,
  related: {
    settings: SectionSettings,
  },
};

export default SectionComponent;
