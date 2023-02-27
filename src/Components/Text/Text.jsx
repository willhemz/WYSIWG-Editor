import React from 'react';
import { Text } from './Text.styles';
import { useNode } from '@craftjs/core';

const TextComponent = ({ children, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Text ref={(ref) => connect(drag(ref))} {...props}>
      {children}
    </Text>
  );
};

TextComponent.craft = {
  rules: {
    canDrag: (node) => node.data.props.children !== 'Drag',
  },
};

export default TextComponent;
