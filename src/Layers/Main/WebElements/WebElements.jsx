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
  const { connectors, query } = useEditor();

  return (
    <Tools>
      <List>
        <Button ref={(ref) => connectors.create(ref, <Element is={SectionComponent} />)}>
          <FontAwesomeIcon title='container' icon='fa-regular fa-square' />
        </Button>
      </List>
      <List>
        <Button ref={(ref) => connectors.create(ref, <Element is={ArticleComponent} />)}>
          <FontAwesomeIcon title='article' icon='fa-regular fa-square' />
        </Button>
      </List>
      <List>
        <Button ref={(ref) => connectors.create(ref, <Element is={DivComponent} />)} variant='div'>
          <FontAwesomeIcon title='div' icon='fa-solid fa-expand' />
        </Button>
      </List>
      <List>
        <Button
          ref={(ref) =>
            connectors.create(ref, <TextComponent fontSize='16'>Hello World</TextComponent>)
          }
        >
          <FontAwesomeIcon title='text' icon='fa-solid fa-font' />
        </Button>
      </List>
      <List>
        <Button ref={(ref) => connectors.create(ref, <ButtonComponent>CLICK ME</ButtonComponent>)}>
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
