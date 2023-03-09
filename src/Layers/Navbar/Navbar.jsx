import React from 'react';
import { Footer, NavMenu, IconBtn, Header, Title, Section } from './Navbar.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from './icon';
import { useEditor } from '@craftjs/core';
import { useDispatch, useSelector } from 'react-redux';
import { openPreview, setDesktop, setLayer, setMobile, setPanel, setTablet } from '../../store';

const Navbar = () => {
  const { isMobile, isTablet, isDesktop, isLayer, isPanel } = useSelector((store) => ({
    isMobile: store.isMobile,
    isTablet: store.isTablet,
    isDesktop: store.isDesktop,
    isLayer: store.isLayer,
    isPanel: store.isPanel,
  }));
  const dispatch = useDispatch();
  const { actions, query, enabled } = useEditor((store) => ({ enabled: store.options.enabled }));

  const handleClick = (title) => {
    if (title === 'mobile') dispatch(setMobile());
    if (title === 'tablet') dispatch(setTablet());
    if (title === 'desktop') dispatch(setDesktop());
    if (title === 'open layer manager') dispatch(setLayer());
    if (title === 'open style manager') dispatch(setPanel());
    if (title === 'preview') {
      dispatch(openPreview());
      dispatch(setDesktop());
      actions.setOptions((options) => (options.enabled = !enabled));
      const data = query.serialize();
    }
  };

  return (
    <NavMenu variant={!enabled && 'hide'}>
      <Header>
        <Title>
          <p>Dexla.io</p>
        </Title>
        <Title variant='outline'>
          <a href='https://github.com/willhemz/WYSIWG-Editor' target='_blank'>
            Github
          </a>
          <a href='https://github.com/willhemz/WYSIWG-Editor' target='_blank'>
            Documentation
          </a>
        </Title>
      </Header>
      <Footer>
        <Section>
          {icons.slice(0, 4).map(({ id, title, icon }) => {
            return (
              <IconBtn
                className={`${title === 'mobile' && isMobile && 'mobile'} ${
                  title === 'tablet' && isTablet && 'tablet'
                } ${title === 'desktop' && isDesktop && 'desktop'}`}
                type='button'
                onClick={() => handleClick(title)}
                key={id}
              >
                <FontAwesomeIcon title={title} icon={icon} />
              </IconBtn>
            );
          })}
        </Section>
        <Section variant='tools'>
          {icons.slice(4, 4).map(({ id, title, icon }) => {
            return (
              <IconBtn type='button' onClick={() => handleClick(title)} key={id}>
                <FontAwesomeIcon title={title} icon={icon} />
              </IconBtn>
            );
          })}
        </Section>
        <Section variant='management'>
          {icons.slice(10, 12).map(({ id, title, icon }) => {
            return (
              <IconBtn
                className={`${title === 'open style manager' && isPanel && 'panel'} ${
                  title === 'open layer manager' && isLayer && 'layer'
                }`}
                variant='iconMgt'
                type='button'
                onClick={() => handleClick(title)}
                key={id}
              >
                <FontAwesomeIcon title={title} icon={icon} />
              </IconBtn>
            );
          })}
        </Section>
      </Footer>
    </NavMenu>
  );
};

export default Navbar;
