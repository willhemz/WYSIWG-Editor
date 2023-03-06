import styled from 'styled-components';

export const Text = styled.p`
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
`;

export const Form = styled.form`
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-top: 1.5rem;
`;

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const FormFooter = styled(FormHeader)`
  flex-direction: column;
  gap: 0.8rem;
`;

export const FormItem = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  position: relative;
  label {
    font-size: 1rem;
    font-weight: 600;
    width: max-content;
  }
`;

export const FIDuplicate = styled(FormItem)`
  flex-direction: column;
`;

export const Color = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  padding-top: 3px;
  background: #000;
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 10;

  button {
    color: #fff;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  width: 100%;
  gap: ${(props) => (props.variant === 'measure' ? '4px' : '1rem')};
  flex-wrap: ${(props) => props.variant === 'measure' && 'wrap'};

  input {
    width: 80%;
    padding: 2px 5px;
    font-size: ${({ variant }) => variant === 'resize' && '11px'};
  }

  select,
  input {
    width: ${(props) => props.variant === 'resize' && '100%'};
  }

  span {
    font-size: 0.8rem;
  }
`;

export const FormTemp = styled(FormGroup)`
  gap: 2px;
  width: 40%;
`;

export const ColorPicker = styled(FormItem)`
  flex-direction: column;
`;
