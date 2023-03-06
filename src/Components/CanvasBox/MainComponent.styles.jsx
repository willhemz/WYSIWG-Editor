import styled from 'styled-components';

export const Main = styled.main`
  width: ${(props) =>
    props.width && props.uW && props.uW !== 'auto'
      ? `${props.width}${props.uW}`
      : props.uW === 'auto'
      ? 'auto'
      : '100%'};
  height: ${(props) =>
    props.height && props.height !== 'auto' && props.uH && props.uH !== 'auto'
      ? `${props.height}${props.uH}`
      : props.uH === 'auto' || props.height === 'auto'
      ? 'auto'
      : '100%'};
  background: ${(props) => (props.background ? props.background : 'transparent')};
  color: ${(props) => props.color};
  display: ${(props) => (props.display ? props.display : 'block')};
  padding-top: ${(props) => (props.paddingTop ? `${props.paddingTop}px` : '0')};
  padding-right: ${(props) => (props.paddingRight ? `${props.paddingRight}px` : '0')};
  padding-left: ${(props) => (props.paddingLeft ? `${props.paddingLeft}px` : '0')};
  padding-bottom: ${(props) => (props.paddingBottom ? `${props.paddingBottom}px` : '0')};
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : '0')};
  margin-right: ${(props) => (props.marginRight ? `${props.marginRight}px` : '0')};
  margin-left: ${(props) => (props.marginLeft ? `${props.marginLeft}px` : '0')};
  margin-bottom: ${(props) => (props.marginBottom ? `${props.marginBottom}px` : '0')};
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'row')};
  gap: ${(props) => (props.gap && props.uG ? `${props.gap}${props.uG}` : '0')};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : 'nowrap')};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'flex-start')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'start')};
  outline: ${({ variant }) => variant === 'selected' && '1px dashed #aaa'};
  cursor: ${({ variant }) => variant === 'selected' && 'move'};
`;
