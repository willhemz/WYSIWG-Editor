import React, { useEffect } from 'react';
import { Main } from './MainComponent.styles';
import { useEditor, useNode } from '@craftjs/core';
import SectionSettings from '../Container/SectionSettings';
import { genProps } from '../Container/Container';
import { useSelector } from 'react-redux';

const MainComponent = ({ children, ...props }) => {
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
    <Main view variant={(enabled || isActive) && 'selected'} ref={(ref) => connect(ref)} {...props}>
      {children}
    </Main>
  );
};

MainComponent.craft = {
  props: { view: 'desktop' },
};

export default MainComponent;
