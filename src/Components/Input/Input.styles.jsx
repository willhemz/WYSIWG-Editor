import styled from 'styled-components';

export const Input = styled.input`
  font-size: ${(props) => `${props.fontSize}px`};
  line-height: ${(props) => `${props.lineHeight}px`};
  padding-top: ${(props) => (props.paddingTop ? `${props.paddingTop}px` : '0')};
  padding-right: ${(props) => (props.paddingRight ? `${props.paddingRight}px` : '0')};
  padding-left: ${(props) => (props.paddingLeft ? `${props.paddingLeft}px` : '0')};
  padding-bottom: ${(props) => (props.paddingBottom ? `${props.paddingBottom}px` : '0')};
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : '0')};
  margin-right: ${(props) => (props.marginRight ? `${props.marginRight}px` : '0')};
  margin-left: ${(props) => (props.marginLeft ? `${props.marginLeft}px` : '0')};
  margin-bottom: ${(props) => (props.marginBottom ? `${props.marginBottom}px` : '0')};
  text-align: ${(props) => props.textAlign};
  font-weight: ${(props) => props.fontWeight};
  font-family: ${(props) => props.fontFamily};
  font-style: ${(props) => props.fontStyle};
  flex-basis: ${(props) =>
    props.flexBasis && props.flexBasis !== '0' ? `${props.flexBasis}%` : 'auto'};
  color: ${(props) => (props.color ? props.color : 'rgba(0,0,0,1)')};
  background: ${(props) => props.background};
  outline: ${({ variant }) => variant === 'selected' && '1px dashed #aaa'};
  border: ${(props) => `${props.border}px ${props.borderType} ${props.borderColor}`};
  border-radius: ${(props) => (props.borderRadius ? `${props.borderRadius}px` : '5px')};
  cursor: ${({ variant }) => variant === 'selected' && 'move'};
`;
