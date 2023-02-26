import React from 'react';
import { Editor } from './Manager.styles';

const Manager = () => {
  return (
    <Editor>
      <header>
        <h4>
          Selected: <span>Selected Item</span>
        </h4>
      </header>
      <footer>
        <button>Delete</button>
      </footer>
    </Editor>
  );
};

export default Manager;
