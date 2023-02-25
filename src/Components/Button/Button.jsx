import React from 'react';
import { Button } from './Button.styles';

const ButtonComponent = ({ text = 'Button', ...props }) => {
  return <Button {...props}>{text}</Button>;
};

export default ButtonComponent;
