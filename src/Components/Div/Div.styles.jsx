import styled from 'styled-components';

export const DivType = styled.div`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  background: ${(props) => (props.background ? props.background : 'transparent')};
  color: ${(props) => (props.color ? props.color : '#000')};
  display: ${(props) => (props.display ? props.display : 'block')};
  padding: ${(props) => (props.padding ? props.padding : '1rem')};
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'row')};
  gap: ${(props) => (props.gap ? props.gap : '1rem')};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : 'no-wrap')};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'flex-start')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'start')};
  box-shadow: ${(props) => props.boxShadow && props.boxShadow};
  outline: ${({ variant }) => variant === 'selected' && '1px dashed #aaa'};
`;
