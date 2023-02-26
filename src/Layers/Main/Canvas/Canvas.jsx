import React from 'react';
import { CanvasBox, CanvasPage } from './Canvas.styles';
import { ArticleComponent, Container, DivComponent, TextComponent } from '../../../Components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Canvas = (props) => {
  return (
    <CanvasPage>
      <CanvasBox {...props}>
        <Container display='flex' flexDirection='column'>
          <ArticleComponent display='flex' alignItems='center'>
            <TextComponent
              fontSize='48'
              background='rgba(0,0,0,0.3)'
              padding='5px 10px'
              color='rgba(0,0,0,0.7)'
              height='100px'
            >
              DEXLA.IO
            </TextComponent>
            <TextComponent fontSize='24'>
              Build your web applications without coding...
            </TextComponent>
          </ArticleComponent>
          <ArticleComponent background='rgba(0,0,0,0.8)' height='200' unit='px'>
            <TextComponent color='#f1f1f1' fontSize='18'>
              Easily drag and drop web elements on the canvas and customise as you desire...
            </TextComponent>
            <DivComponent display='flex' height='80' unit='%' alignItems='center' padding='0'>
              <TextComponent color='white' fontSize='20'>
                <FontAwesomeIcon icon='fa-solid fa-check' />
                Container
              </TextComponent>
              <TextComponent color='white' fontSize='20'>
                <FontAwesomeIcon icon='fa-solid fa-check' />
                Article
              </TextComponent>
              <TextComponent color='white' fontSize='20'>
                <FontAwesomeIcon icon='fa-solid fa-check' />
                Div
              </TextComponent>
              <TextComponent color='white' fontSize='20'>
                <FontAwesomeIcon icon='fa-solid fa-check' />
                Text
              </TextComponent>
              <TextComponent color='white' fontSize='20'>
                <FontAwesomeIcon icon='fa-solid fa-check' />
                Image
              </TextComponent>
            </DivComponent>
          </ArticleComponent>
        </Container>
        <Container display='flex' flexDirection='column' alignItems='center'>
          <TextComponent
            fontSize='36'
            padding='5px 10px'
            color='rgba(0,0,0,0.7)'
            height='100px'
            width='auto'
          >
            Flexibility is sure...
          </TextComponent>
          <ArticleComponent
            display='flex'
            wrap='no-wrap'
            height='250'
            unit='px'
            justifyContent='center'
          >
            <DivComponent height='100' unit='%' boxShadow='0 0 1.3rem rgba(0,0,0,0.2)' padding='0'>
              <TextComponent
                fontSize='36'
                padding='15px 10px'
                color='rgba(0,0,0,0.7)'
                background='rgba(0,0,0,0.3)'
                width='auto'
                fontWeight='700'
                textAlign='center'
                height='50%'
              >
                TITLE
              </TextComponent>
              <TextComponent
                fontSize='36'
                padding='15px 10px'
                color='rgba(0,0,0,0.7)'
                width='auto'
                fontWeight='200'
                textAlign='center'
                height='50%'
              >
                Content...
              </TextComponent>
            </DivComponent>
            <DivComponent height='100' unit='%' boxShadow='0 0 1.3rem rgba(0,0,0,0.2)' padding='0'>
              <TextComponent
                fontSize='36'
                padding='15px 10px'
                color='rgba(0,0,0,0.7)'
                background='rgba(0,0,0,0.3)'
                width='auto'
                fontWeight='700'
                textAlign='center'
                height='50%'
              >
                TITLE
              </TextComponent>
              <TextComponent
                fontSize='36'
                padding='15px 10px'
                color='rgba(0,0,0,0.7)'
                width='auto'
                fontWeight='200'
                textAlign='center'
                height='50%'
              >
                Content...
              </TextComponent>
            </DivComponent>
            <DivComponent height='100' unit='%' boxShadow='0 0 1.3rem rgba(0,0,0,0.2)' padding='0'>
              <TextComponent
                fontSize='36'
                padding='15px 10px'
                color='rgba(0,0,0,0.7)'
                background='rgba(0,0,0,0.3)'
                width='auto'
                fontWeight='700'
                textAlign='center'
                height='50%'
              >
                TITLE
              </TextComponent>
              <TextComponent
                fontSize='36'
                padding='15px 10px'
                color='rgba(0,0,0,0.7)'
                width='auto'
                fontWeight='200'
                textAlign='center'
                height='50%'
              >
                Content...
              </TextComponent>
            </DivComponent>
          </ArticleComponent>
        </Container>
        <Container>
          <TextComponent textAlign='center'>Built by Williams Balogun &copy;2023</TextComponent>
        </Container>
      </CanvasBox>
    </CanvasPage>
  );
};

export default Canvas;
