import styled from 'styled-components';

export const Editor = styled.aside`
  grid-column-start: span 5;
  height: calc(100vh - 6rem);
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: wrap;
  padding: 1rem;
  font-size: 1.4rem;

  h4 {
    text-align: center;
    border: 1px dashed black;
    padding-bottom: 5px;
  }

  em {
    font-size: 1rem;
  }

  footer {
    width: 100%;
    margin-top: 1rem;
    padding: 5px;
    text-align: center;
  }

  footer > button {
    width: 80%;
    padding: 0.8rem;
    font-size: 1.2rem;
    border-radius: 1rem;
    background: #5c1002;
    color: #f1f1f1;
    border: none;
    box-shadow: 0 0 0.7rem #5c1002;
  }

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
