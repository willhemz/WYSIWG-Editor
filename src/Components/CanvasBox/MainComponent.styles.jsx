import styled from 'styled-components';

export const Main = styled.main`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  background: ${(props) => (props.background ? props.background : 'transparent')};
  display: ${(props) => (props.display ? props.display : 'block')};
  padding: ${(props) => (props.padding ? props.padding : '1rem')};
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'row')};
  gap: ${(props) => (props.gap ? props.gap : '1rem')};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : 'no-wrap')};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'flex-start')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'start')};
  outline: ${({ variant }) => variant === 'selected' && '1px dashed #aaa'};
  cursor: move;
`;
