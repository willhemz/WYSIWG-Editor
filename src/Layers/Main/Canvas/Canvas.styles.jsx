import styled from 'styled-components';

export const CanvasPage = styled.section`
  grid-column-start: ${(props) => (props.variant === 'enlarge' ? 'span 25' : 'span 19')};
  height: ${(props) => (props.variant === 'enlarge' ? 'auto' : 'calc(100vh - 6rem)')};
  background: rgba(230, 222, 222, 0.4);
  padding: ${({ variant }) => variant === 'selected' && '2rem 3rem'};
  display: flex;
  justify-content: center;
  position: relative;
`;

export const BtnClick = styled.button`
  background: #2e0101;
  color: #fff;
  display: ${(props) => props.variant === 'viewBtn' && 'none'};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
`;
