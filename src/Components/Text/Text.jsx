import React from 'react';
import { Text } from './Text.styles';

const TextComponent = ({ text, ...props }) => {
  return <Text {...props}>{text}</Text>;
};

export default TextComponent;
