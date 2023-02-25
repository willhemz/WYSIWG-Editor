import styled from 'styled-components';

export const Text = styled.p`
  font-size: ${(props) => `${props.fontSize}px`};
  line-height: ${(props) => `${props.lineHeight}px`};
  padding: ${(props) => `${props.padding}px`};
  margin: ${(props) => `${props.margin}px`};
  text-align: ${(props) => `${props.textAlign}`};
  font-weight: ${(props) => `${props.fontWeight}px`};
  font-family: ${(props) => props.fontFamily};
  font-style: ${(props) => props.fontStyle};
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  color: ${(props) => props.color};
  background: ${(props) => props.background};
`;
