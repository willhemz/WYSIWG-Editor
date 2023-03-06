import styled from 'styled-components';

export const Editor = styled.aside`
  grid-column-start: ${(props) => props.variant !== 'hide' && 'span 5'};
  display: ${(props) => (props.variant === 'hide' ? 'none' : 'flex')};
  height: calc(100vh - 6rem);
  background: #fff;
  flex-direction: column;
  overflow-y: ${(props) => (props.variant === 'hide' ? 'hidden' : 'scroll')};
  overflow-x: hidden;
  padding: 1rem;
  font-size: 1.4rem;

  h4 {
    text-align: center;
    border: 1px dashed black;
    padding-bottom: 5px;
    font-size: 1.2rem;
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
    width: 60%;
    padding: 0.8rem;
    font-size: 1rem;
    border-radius: 1rem;
    background: #f1f1f1;
    color: #000;
    border: none;
    box-shadow: 0 0 0.5rem #aaa;
  }

  /* ::-webkit-scrollbar {
    scroll-behavior: smooth;
    width: 1rem;
  }
  ::-webkit-scrollbar-thumb {
    background: #ccc;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  } */
`;
