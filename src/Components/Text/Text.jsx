import React from 'react';
import { Text } from './Text.styles';

const TextComponent = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};

export default TextComponent;
