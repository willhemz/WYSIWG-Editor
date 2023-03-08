import styled from 'styled-components';

export const Form = styled.form`
  width: ${({ custom }) =>
    custom.width && custom.uW && custom.uW !== 'auto'
      ? `${custom.width}${custom.uW}`
      : custom.uW === 'auto'
      ? 'auto'
      : '100%'};
  height: ${({ custom }) =>
    custom.height && custom.height !== 'auto' && custom.uH && custom.uH !== 'auto'
      ? `${custom.height}${custom.uH}`
      : custom.uH === 'auto' || (custom.height === 'auto' && 'auto')};
  background: ${({ custom }) => (custom.background ? custom.background : 'transparent')};
  display: ${({ custom }) => (custom.display ? custom.display : 'block')};
  padding-top: ${({ custom }) => (custom.paddingTop ? `${custom.paddingTop}px` : '10px')};
  padding-right: ${({ custom }) => (custom.paddingRight ? `${custom.paddingRight}px` : '10px')};
  padding-left: ${({ custom }) => (custom.paddingLeft ? `${custom.paddingLeft}px` : '10px')};
  padding-bottom: ${({ custom }) => (custom.paddingBottom ? `${custom.paddingBottom}px` : '10px')};
  margin-top: ${({ custom }) => (custom.marginTop ? `${custom.marginTop}px` : '0')};
  margin-right: ${({ custom }) => (custom.marginRight ? `${custom.marginRight}px` : '0')};
  margin-left: ${({ custom }) => (custom.marginLeft ? `${custom.marginLeft}px` : '0')};
  margin-bottom: ${({ custom }) => (custom.marginBottom ? `${custom.marginBottom}px` : '0')};
  flex-direction: ${({ custom }) => (custom.flexDirection ? custom.flexDirection : 'row')};
  gap: ${({ custom }) => (custom.gap && custom.uG ? `${custom.gap}${custom.uG}` : '0')};
  flex-wrap: ${({ custom }) => (custom.flexWrap ? custom.flexWrap : 'nowrap')};
  justify-content: ${({ custom }) =>
    custom.justifyContent ? custom.justifyContent : 'flex-start'};
  align-items: ${({ custom }) => (custom.alignItems ? custom.alignItems : 'start')};
  outline: ${({ variant }) => variant === 'selected' && '1px dashed #aaa'};
  cursor: ${({ variant }) => variant === 'selected' && 'move'};
`;
