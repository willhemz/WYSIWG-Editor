import styled from 'styled-components';

export const CanvasPage = styled.section`
  grid-column-start: span 25;
  height: 50rem;
  background: rgba(230, 222, 222, 0.4);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    scroll-behavior: smooth;
  }
  ::-webkit-scrollbar-thumb {
  }
  ::-webkit-scrollbar-track {
  }
`;

export const CanvasBox = styled.canvas`
  width: 100%;
  height: 100%;
`;
