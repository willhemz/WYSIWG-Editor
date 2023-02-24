import React from 'react';
import { Navbar } from './Layers';
import styled from 'styled-components';
import './fontawesome';

const App = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 2050px;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
`;
