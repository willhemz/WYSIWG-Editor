import React, { useEffect, useRef } from 'react';
import { Main } from './MainComponent.styles';
import { useEditor, useNode } from '@craftjs/core';
import { useSelector } from 'react-redux';
import MainSettings from './MainSettings';

const MainComponent = ({ children, ...props }) => {
  const dom = useRef(null);
  const { isDesktop, isTablet, isMobile } = useSelector((store) => ({
    isDesktop: store.isDesktop,
    isTablet: store.isTablet,
    isMobile: store.isMobile,
  }));
  const {
    connectors: { connect },
    actions: { setProp },
    isActive,
  } = useNode((store) => ({ isActive: store.events.selected }));
  const { enabled } = useEditor((store) => ({ enabled: store.options.enabled }));

  useEffect(() => {
    if (isDesktop) setProp((props) => (props.view = 'desktop'));
    if (isTablet) setProp((props) => (props.view = 'tablet'));
    if (isMobile) setProp((props) => (props.view = 'mobile'));
  }, [isDesktop, isMobile, isTablet]);

  return (
    <Main variant={enabled ? 'selected' : 'enlarge'} ref={(ref) => connect(ref)} {...props}>
      {children}
    </Main>
  );
};

MainComponent.craft = {
  props: { view: 'desktop', background: 'rgba(255,255,255,1)' },
  related: {
    settings: MainSettings,
  },
};

export default MainComponent;
