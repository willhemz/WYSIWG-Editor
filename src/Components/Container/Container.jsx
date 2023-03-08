import React from 'react';
import { Section } from './Container.styles';
import { useNode, useEditor } from '@craftjs/core';
import SectionSettings from './SectionSettings';
import { useSelector } from 'react-redux';
import { genProps, calcSize } from './sectionData';

const SectionComponent = ({ children }) => {
  const { isDesktop, isTablet, isMobile, boxWidth } = useSelector((store) => ({
    isDesktop: store.isDesktop,
    isTablet: store.isTablet,
    isMobile: store.isMobile,
    boxWidth: store.boxWidth,
  }));

  const {
    connectors: { connect, drag },
    custom: { desktop, mobile, tablet },
  } = useNode((node) => ({ custom: node.data.custom }));
  const { enabled } = useEditor((store) => ({ enabled: store.options.enabled }));

  let view;
  if (isDesktop) {
    view =
      enabled && desktop.uW === 'px'
        ? { ...desktop, width: calcSize(desktop.width, boxWidth) }
        : { ...desktop };
  }
  if (isTablet) {
    view =
      enabled && tablet.uW === 'px'
        ? { ...tablet, width: calcSize(tablet.width, boxWidth) }
        : { ...tablet };
  }
  if (isMobile) {
    view =
      enabled && mobile.uW === 'px'
        ? { ...mobile, width: calcSize(mobile.width, boxWidth) }
        : { ...mobile };
  }

  return (
    <Section custom={view} variant={enabled && 'selected'} ref={(ref) => connect(drag(ref))}>
      {children}
    </Section>
  );
};

SectionComponent.craft = {
  props: genProps,
  custom: { mobile: {}, tablet: {}, desktop: {} },
  related: {
    settings: SectionSettings,
  },
};

export default SectionComponent;
