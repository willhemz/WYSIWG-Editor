import styled from 'styled-components';

export const Main = styled.main`
  width: ${(props) =>
    props.view === 'desktop' && props.variant === 'selected'
      ? '100%'
      : props.view === 'tablet' && props.variant === 'selected'
      ? '70%'
      : props.view === 'mobile' && props.variant === 'selected'
      ? '40%'
      : '100%'};
  height: auto;
  background: ${(props) => props.background};
  overflow-y: auto;
  overflow-x: hidden;

  outline: ${({ variant }) => variant === 'selected' && '1px dashed #aaa'};
  cursor: ${({ variant }) => variant === 'selected' && 'move'};
`;
