import React from 'react';
import { CanvasPage } from './Canvas.styles';
import {
  ArticleComponent,
  SectionComponent,
  DivComponent,
  TextComponent,
  MainComponent,
} from '../../../Components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Editor, Frame, Element } from '@craftjs/core';

const Canvas = (props) => {
  return (
    <CanvasPage>
      <Frame>
        <Element is={MainComponent} background='#fff' height='max-content' canvas>
          <Element is={SectionComponent} canvas display='flex' flexDirection='column'>
            <Element is={ArticleComponent} canvas display='flex' alignItems='center'>
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
            </Element>
            <Element
              is={ArticleComponent}
              canvas
              background='rgba(0,0,0,0.8)'
              height='200'
              unit='px'
            >
              <TextComponent color='#f1f1f1' fontSize='18'>
                Easily drag and drop web elements on the canvas and customise as you desire...
              </TextComponent>
              <Element
                is={DivComponent}
                canvas
                display='flex'
                height='80'
                unit='%'
                alignItems='center'
                padding='0'
              >
                <DivComponent display='flex' color='white' alignItems='center'>
                  <FontAwesomeIcon icon='fa-solid fa-check' />
                  <TextComponent color='white' fontSize='20'>
                    Container
                  </TextComponent>
                </DivComponent>
                <DivComponent display='flex' color='white' alignItems='center'>
                  <FontAwesomeIcon icon='fa-solid fa-check' />
                  <TextComponent color='white' fontSize='20'>
                    Article
                  </TextComponent>
                </DivComponent>
                <DivComponent display='flex' color='white' alignItems='center'>
                  <FontAwesomeIcon icon='fa-solid fa-check' />
                  <TextComponent color='white' fontSize='20'>
                    Div
                  </TextComponent>
                </DivComponent>
                <DivComponent display='flex' color='white' alignItems='center'>
                  <FontAwesomeIcon icon='fa-solid fa-check' />
                  <TextComponent color='white' fontSize='20'>
                    Text
                  </TextComponent>
                </DivComponent>
                <DivComponent display='flex' color='white' alignItems='center'>
                  <FontAwesomeIcon icon='fa-solid fa-check' />
                  <TextComponent color='white' fontSize='20'>
                    Image
                  </TextComponent>
                </DivComponent>
              </Element>
            </Element>
          </Element>
          <Element
            is={SectionComponent}
            canvas
            display='flex'
            flexDirection='column'
            alignItems='center'
          >
            <TextComponent
              fontSize='36'
              padding='5px 10px'
              color='rgba(0,0,0,0.7)'
              height='100px'
              width='auto'
            >
              Flexibility is sure...
            </TextComponent>
            <Element
              is={ArticleComponent}
              canvas
              display='flex'
              wrap='no-wrap'
              height='250'
              unit='px'
              justifyContent='center'
            >
              <Element
                is={DivComponent}
                canvas
                height='100'
                unit='%'
                boxShadow='0 0 1.3rem rgba(0,0,0,0.2)'
                padding='0'
              >
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
              </Element>
              <Element
                is={DivComponent}
                canvas
                height='100'
                unit='%'
                boxShadow='0 0 1.3rem rgba(0,0,0,0.2)'
                padding='0'
              >
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
              </Element>
              <Element
                is={DivComponent}
                canvas
                height='100'
                unit='%'
                boxShadow='0 0 1.3rem rgba(0,0,0,0.2)'
                padding='0'
              >
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
              </Element>
            </Element>
          </Element>
          <SectionComponent>
            <TextComponent textAlign='center'>Built by Williams Balogun &copy;2023</TextComponent>
          </SectionComponent>
        </Element>
      </Frame>
    </CanvasPage>
  );
};

export default Canvas;
