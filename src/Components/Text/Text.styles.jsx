import styled from 'styled-components';

export const Text = styled.div`
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
  cursor: move;
  position: relative;
`;

export const Form = styled.form`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  label {
    font-size: 1.2rem;
    font-weight: 600;
  }
  input {
    flex-grow: 1;
    padding: 5px;
    border-radius: 5px;
    background: transparent;
    border: 2px solid #000;
  }
`;
