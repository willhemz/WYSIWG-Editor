import styled from 'styled-components';

export const Button = styled.button`
  font-size: ${(props) => `${props.fontSize}px`};
  font-weight: ${(props) => props.fontWeight};
  font-family: ${(props) => props.fontFamily};
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  padding: ${(props) => `${props.padding}px`};
  margin: ${(props) => `${props.margin}px`};
  text-align: ${(props) => `${props.textAlign}`};
`;
