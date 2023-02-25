import React from 'react';
import { Main } from './Container.styles';
import { Canvas, Manager, WebElements } from '../../index';

const Container = () => {
  return (
    <Main>
      <WebElements />
      <Canvas />
      <Manager />
    </Main>
  );
};

export default Container;
