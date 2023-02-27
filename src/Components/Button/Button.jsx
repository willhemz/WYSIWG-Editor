import React from 'react';
import { Button } from './Button.styles';
import { useNode } from '@craftjs/core';

const ButtonComponent = ({ text = 'Button', ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Button ref={(ref) => connect(drag(ref))} {...props}>
      {text}
    </Button>
  );
};

export default ButtonComponent;
