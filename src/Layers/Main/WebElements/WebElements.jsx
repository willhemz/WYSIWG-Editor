import React from 'react';
import { Button, List, Tools } from './WebElements.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WebElements = () => {
  return (
    <Tools>
      <List>
        <Button>
          <FontAwesomeIcon title='container' icon='fa-regular fa-square' />
        </Button>
      </List>
      <List>
        <Button>
          <FontAwesomeIcon title='text' icon='fa-solid fa-font' />
        </Button>
      </List>
      <List>
        <Button>
          <FontAwesomeIcon title='button' icon='fa-solid fa-toggle-on' />
        </Button>
      </List>
    </Tools>
  );
};

export default WebElements;
