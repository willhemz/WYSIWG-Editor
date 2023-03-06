import styled from 'styled-components';

export const CanvasPage = styled.section`
  grid-column-start: ${(props) => (props.variant === 'enlarge' ? 'span 25' : 'span 19')};
  height: ${(props) => (props.variant === 'enlarge' ? 'max-content' : 'calc(100vh - 6rem)')};
  background: rgba(230, 222, 222, 0.4);
  overflow-y: ${(props) => props.variant === 'selected' && 'scroll'};
  padding: ${({ variant }) => variant === 'selected' && '2rem 3rem'};
  display: flex;
  justify-content: center;
  position: relative;
  ::-webkit-scrollbar {
    scroll-behavior: smooth;
    width: 1rem;
  }
  ::-webkit-scrollbar-thumb {
    background: #ccc;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
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
