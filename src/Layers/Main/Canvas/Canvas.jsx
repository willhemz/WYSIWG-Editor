import React from 'react';
import { BtnClick, CanvasPage } from './Canvas.styles';
import { MainComponent } from '../../../Components';
import { Editor, Frame, Element, useEditor } from '@craftjs/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Canvas = (props) => {
  const {
    actions: { setOptions },
    enabled,
  } = useEditor((store) => ({ enabled: store.options.enabled }));
  return (
    <CanvasPage variant={enabled ? 'selected' : 'enlarge'}>
      <Frame>
        <Element is={MainComponent} canvas />
      </Frame>
      <BtnClick
        onClick={() => setOptions((options) => (options.enabled = 'true'))}
        variant={enabled && 'viewBtn'}
      >
        <FontAwesomeIcon icon='fa-solid fa-eye-slash' />
      </BtnClick>
    </CanvasPage>
  );
};

export default Canvas;
