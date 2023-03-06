import React, { useEffect, useState } from 'react';
import { Button } from './Button.styles';
import { useNode, useEditor } from '@craftjs/core';
import ContentEditable from 'react-contenteditable';
import ButtonSetting from './ButtonSetting';
import { textProps } from '../Text/Text';

const ButtonComponent = ({ text, ...props }) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
    isActive,
  } = useNode((store) => ({ isActive: store.events.selected }));

  const { enabled } = useEditor((store) => ({ enabled: store.options.enabled }));

  const [editable, setEditable] = useState(false);
  useEffect(() => {
    !isActive && setEditable(false);
  }, [isActive]);

  return (
    <Button
      type='submit'
      variant={enabled && 'selected'}
      onClick={() => enabled && setEditable(true)}
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
    ...textProps,
    text: 'CLICK ME',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 4,
    paddingRight: 4,
    background: 'rgba(255,255,255,1)',
    border: 0,
    borderColor: 'rgba(0,0,0,1)',
    borderType: 'solid',
  },
  rules: {
    canDrag: (node) => node.data.props.text !== 'Drag',
  },
  related: {
    settings: ButtonSetting,
  },
};

export default ButtonComponent;
