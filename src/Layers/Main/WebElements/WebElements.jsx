import React from 'react';
import { Btn, List, Tools } from './WebElements.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Element, useEditor } from '@craftjs/core';
import { Button, Container, Text, Form, Input } from '../../../Components';

const WebElements = () => {
  const { connectors, query, enabled } = useEditor((store) => ({ enabled: store.options.enabled }));

  return (
    <Tools variant={!enabled && 'hide'}>
      <List>
        <Btn ref={(ref) => connectors.create(ref, <Element is={Container} canvas />)}>
          <FontAwesomeIcon title='container' icon='fa-regular fa-square' />
        </Btn>
      </List>

      <List>
        <Btn ref={(ref) => connectors.create(ref, <Text />)}>
          <FontAwesomeIcon title='text' icon='fa-solid fa-font' />
        </Btn>
      </List>
      <List>
        <Btn ref={(ref) => connectors.create(ref, <Element is={Form} canvas />)}>
          <FontAwesomeIcon title='form' icon='fa-solid fa-f' />
        </Btn>
      </List>
      <List>
        <Btn ref={(ref) => connectors.create(ref, <Input />)}>
          <FontAwesomeIcon title='input' icon='fa-solid fa-i' />
        </Btn>
      </List>
      <List>
        <Btn ref={(ref) => connectors.create(ref, <Button />)}>
          <FontAwesomeIcon title='button' icon='fa-solid fa-toggle-on' />
        </Btn>
      </List>
    </Tools>
  );
};

export default WebElements;
