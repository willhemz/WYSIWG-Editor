import styled from 'styled-components';

export const Text = styled.p`
  font-size: ${(props) => `${props.fontSize}px`};
  line-height: ${(props) => `${props.lineHeight}px`};
  padding: ${(props) => `${props.padding}px`};
  margin: ${(props) => `${props.margin}px`};
  text-align: ${(props) => `${props.textAlign}px`};
  font-weight: ${(props) => `${props.fontWeight}px`};
`;
