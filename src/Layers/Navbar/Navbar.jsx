import React from 'react';
import { Footer, NavMenu, IconBtn, Header, Title, Section } from './Navbar.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from './icon';

const Navbar = () => {
  return (
    <NavMenu>
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
              <IconBtn key={id}>
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
