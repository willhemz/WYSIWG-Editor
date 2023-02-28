import React, { useEffect, useState } from 'react';
import { Button } from './Button.styles';
import { useNode } from '@craftjs/core';
import ContentEditable from 'react-contenteditable';

const ButtonComponent = ({ text = 'Button', ...props }) => {
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

  console.log(isActive);

  return (
    <Button onClick={() => setEditable(true)} ref={(ref) => connect(drag(ref))} {...props}>
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
  rules: {
    canDrag: (node) => node.data.props.text !== 'Drag',
  },
};

export default ButtonComponent;
