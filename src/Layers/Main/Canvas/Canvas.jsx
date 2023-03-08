import React from 'react';
import { BtnClick, CanvasPage } from './Canvas.styles';
import { Main } from '../../../Components';
import { Frame, Element, useEditor } from '@craftjs/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Canvas = () => {
  const {
    actions: { setOptions },
    enabled,
  } = useEditor((store) => ({ enabled: store.options.enabled }));
  return (
    <CanvasPage variant={enabled ? 'selected' : 'enlarge'}>
      <Frame>
        <Element is={Main} canvas />
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
