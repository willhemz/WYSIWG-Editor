import React from 'react';
import { Footer, NavMenu, IconBtn, Header, Title, Section } from './Navbar.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from './icon';
import { Editor, Frame, useEditor } from '@craftjs/core';

const Navbar = () => {
  const { actions, query, enabled } = useEditor((store) => ({ enabled: store.options.enabled }));

  const handleClick = (title) => {
    if (title === 'preview') {
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
          <a href='https://github.com/willhemz/WYSIWG-Editor'>Github</a>
          <a href='https://github.com/willhemz/WYSIWG-Editor'>Documentation</a>
        </Title>
      </Header>
      <Footer>
        <Section>
          {icons.slice(0, 3).map(({ id, title, icon }) => {
            return (
              <IconBtn key={id}>
                <FontAwesomeIcon title={title} icon={icon} />
              </IconBtn>
            );
          })}
        </Section>
        <Section variant='tools'>
          {icons.slice(3, 10).map(({ id, title, icon }) => {
            return (
              <IconBtn type='button' onClick={() => handleClick(title)} key={id}>
                <FontAwesomeIcon title={title} icon={icon} />
              </IconBtn>
            );
          })}
        </Section>
        <Section variant='management'>
          {icons.slice(10, 13).map(({ id, title, icon }) => {
            return (
              <IconBtn key={id} variant='iconMgt'>
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
