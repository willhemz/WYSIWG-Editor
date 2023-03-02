import React from 'react';
import { Button, List, Tools } from './WebElements.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Element, useEditor } from '@craftjs/core';
import {
  ButtonComponent,
  ArticleComponent,
  SectionComponent,
  DivComponent,
  TextComponent,
} from '../../../Components';

const WebElements = () => {
  const { connectors, query, enabled } = useEditor((store) => ({ enabled: store.options.enabled }));

  return (
    <Tools variant={!enabled && 'hide'}>
      <List>
        <Button ref={(ref) => connectors.create(ref, <Element is={SectionComponent} canvas />)}>
          <FontAwesomeIcon title='container' icon='fa-regular fa-square' />
        </Button>
      </List>
      <List>
        <Button ref={(ref) => connectors.create(ref, <Element is={ArticleComponent} canvas />)}>
          <FontAwesomeIcon title='article' icon='fa-regular fa-square' />
        </Button>
      </List>
      <List>
        <Button ref={(ref) => connectors.create(ref, <Element is={DivComponent} canvas />)}>
          <FontAwesomeIcon title='div' icon='fa-solid fa-expand' />
        </Button>
      </List>
      <List>
        <Button ref={(ref) => connectors.create(ref, <TextComponent />)}>
          <FontAwesomeIcon title='text' icon='fa-solid fa-font' />
        </Button>
      </List>
      <List>
        <Button ref={(ref) => connectors.create(ref, <ButtonComponent />)}>
          <FontAwesomeIcon title='button' icon='fa-solid fa-toggle-on' />
        </Button>
      </List>
      <List>
        <Button>
          <FontAwesomeIcon title='image' icon='fa-regular fa-image' />
        </Button>
      </List>
    </Tools>
  );
};

export default WebElements;
