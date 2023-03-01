import styled from 'styled-components';

export const CanvasPage = styled.section`
  grid-column-start: span 19;
  height: calc(100vh - 6rem);
  background: rgba(230, 222, 222, 0.4);
  overflow-y: scroll;
  padding: 2rem 3rem;
  display: flex;
  justify-content: center;
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
