import React, { useEffect, useState } from 'react';
import { Button } from './Button.styles';
import { useNode } from '@craftjs/core';
import ContentEditable from 'react-contenteditable';
import ButtonSetting from './ButtonSetting';

const ButtonComponent = ({ text, ...props }) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
    isActive,
    isDragged,
  } = useNode((store) => ({ isActive: store.events.selected, isDragged: store.events.dragged }));

  const [editable, setEditable] = useState(false);
  useEffect(() => {
    !isActive && setEditable(false);
  }, [isActive]);

  return (
    <Button
      variant={isActive && 'selected'}
      onClick={() => setEditable(true)}
      ref={(ref) => connect(drag(ref))}
      {...props}
    >
      <ContentEditable
        disabled={!editable}
        html={text}
        tagName='span'
        onChange={(e) =>
          setProp((props) => (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, '')))
        }
      />
    </Button>
  );
};

ButtonComponent.craft = {
  props: {
    text: 'CLICK ME',
  },
  rules: {
    canDrag: (node) => node.data.props.text !== 'Drag',
  },
  related: {
    settings: ButtonSetting,
  },
};

export default ButtonComponent;
