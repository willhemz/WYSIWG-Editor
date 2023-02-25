import styled from 'styled-components';

export const Main = styled.main`
  width: ${(props) => (props.width ? `${props.width}${props.unit}` : '100%')};
  height: ${(props) => (props.height ? `${props.height}${props.unit}` : 'auto')};
  background: ${(props) => (props.background ? props.background : 'transparent')};
  display: ${(props) => (props.display ? props.display : 'block')};
`;
