import styled from 'styled-components';

export const Button = styled.button`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '16px')};
  line-height: ${(props) => (props.lineHeight ? `${props.lineHeight}px` : 'auto')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  font-family: ${(props) => props.fontFamily};
  width: ${(props) => (props.width ? `${props.width}px` : 'auto')};
  height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
  color: ${(props) => (props.color ? props.color : 'white')};
  background: ${(props) => (props.background ? props.background : 'blue')};
  padding: ${(props) => (props.padding ? props.padding : '10px')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  border: ${(props) => (props.border ? props.border : 'none')};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '5px')};
  box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : '0 0 10px 0 rgba(0,0,0,0.8)')};
  text-align: ${(props) => `${props.textAlign}`};
  cursor: move;
  outline: ${({ variant }) => variant === 'selected' && '1px dashed #aaa'};
`;
