import React, { useEffect } from 'react';
import { Navbar, Wrapper } from './Layers';
import styled from 'styled-components';
import './fontawesome';
import { Editor } from '@craftjs/core';
import { Container, Text, Main, Button, Form, Input } from './Components';
import { useDispatch } from 'react-redux';
import { setWidth } from './store';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener('resize', () => dispatch(setWidth(window.innerWidth)));
    return () => window.removeEventListener('resize', () => dispatch(setWidth(window.innerWidth)));
  }, []);
  return (
    <AppWrapper>
      <Editor
        resolver={{
          Container,
          Text,
          Main,
          Button,
          Form,
          Input,
        }}
      >
        <Navbar />
        <Wrapper />
      </Editor>
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  overflow: hidden;
`;
