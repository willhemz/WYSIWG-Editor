import React, { useEffect } from 'react';
import { Navbar, Wrapper } from './Layers';
import styled from 'styled-components';
import './fontawesome';
import { Editor } from '@craftjs/core';
import { Container, Text, Main, Button, Form, Input } from './Components';
import { useDispatch, useSelector } from 'react-redux';
import { setDesktop, setMobile, setTablet, setWidth } from './store';

const App = () => {
  const dispatch = useDispatch();
  const { isPreview } = useSelector((store) => ({ isPreview: store.isPreview }));
  useEffect(() => {
    window.addEventListener('resize', () => dispatch(setWidth(window.innerWidth)));
    return () => window.removeEventListener('resize', () => dispatch(setWidth(window.innerWidth)));
  }, []);
  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth >= 768) dispatch(setDesktop());
      if (window.innerWidth < 768 && window.innerWidth >= 480) dispatch(setTablet());
      if (window.innerWidth < 479) dispatch(setMobile());
    };
    window.addEventListener('resize', handleSize);
    return () => window.removeEventListener('resize', handleSize);
  }, []);
  return (
    <AppWrapper variant={isPreview && 'default'}>
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
  height: ${(props) => (props.variant === 'default' ? 'auto' : '100vh')};
  padding: 0;
  margin: 0;
  overflow: hidden;
`;
