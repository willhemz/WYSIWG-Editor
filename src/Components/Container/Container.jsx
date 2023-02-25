import React from 'react';
import { Main } from './Container.styles';

const Container = ({ children, ...props }) => {
  return <Main {...props}>{children}</Main>;
};

export default Container;
