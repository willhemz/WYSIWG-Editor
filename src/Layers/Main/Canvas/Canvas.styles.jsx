import styled from 'styled-components';

export const CanvasPage = styled.section`
  grid-column-start: span 25;
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

export const CanvasBox = styled.main`
  width: 85%;
  height: ${(props) => (props.height ? props.height : 'max-content')};
  background: #fff;
  box-shadow: 0 0 1rem 0px rgba(0, 0, 0, 0.1);
`;
