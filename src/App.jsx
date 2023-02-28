import React from 'react';
import { Main, Navbar } from './Layers';
import styled from 'styled-components';
import './fontawesome';
import { Editor } from '@craftjs/core';
import {
  ArticleComponent,
  SectionComponent,
  DivComponent,
  TextComponent,
  MainComponent,
  ButtonComponent,
} from './Components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App = () => {
  return (
    <Container>
      <Editor
        resolver={{
          ArticleComponent,
          SectionComponent,
          DivComponent,
          TextComponent,
          MainComponent,
          FontAwesomeIcon,
          ButtonComponent,
        }}
      >
        <Navbar />
        <Main />
      </Editor>
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
