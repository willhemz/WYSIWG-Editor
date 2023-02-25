import React from 'react';
import { Main } from './Container.styles';
import { Canvas, Manager } from '../../index';

const Container = () => {
  return (
    <Main>
      <Canvas />
      <Manager />
    </Main>
  );
};

export default Container;
