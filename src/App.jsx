import React from 'react';
import { Main, Navbar } from './Layers';
import styled from 'styled-components';
import './fontawesome';

const App = () => {
  return (
    <Container>
      <Navbar />
      <Main />
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  overflow: hidden;
`;
