import styled from 'styled-components';

export const Text = styled.p`
  font-size: ${(props) => `${props.fontSize}px`};
  line-height: ${(props) => `${props.lineHeight}px`};
  padding: ${(props) => props.padding};
  margin: ${(props) => `${props.margin}px`};
  text-align: ${(props) => `${props.textAlign}`};
  font-weight: ${(props) => `${props.fontWeight}`};
  font-family: ${(props) => props.fontFamily};
  font-style: ${(props) => props.fontStyle};
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  color: ${(props) => (props.color ? props.color : '#000')};
  background: ${(props) => props.background};
`;
