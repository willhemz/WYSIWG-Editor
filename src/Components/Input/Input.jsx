import React, { useEffect, useState } from 'react';
import { useEditor, useNode } from '@craftjs/core';
import { Input } from './Input.styles';

import { textProps } from '../Text/Text';
import ButtonSetting from '../Button/ButtonSetting';

const InputComponent = ({ name, text, type, ...props }) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
  } = useNode();
  const { enabled } = useEditor((store) => ({ enabled: store.options.enabled }));

  return (
    <Input
      variant={enabled && 'selected'}
      ref={(ref) => connect(drag(ref))}
      name={name}
      value={text}
      type={type}
      {...props}
      onChange={(e) => setProp((props) => (props.text = e.target.value))}
    />
  );
};

InputComponent.craft = {
  props: {
    ...textProps,
    text: 'type here..',
    type: 'text',
    name: 'text',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 4,
    paddingRight: 4,
    background: 'rgba(255,255,255,1)',
    border: 1,
    borderColor: 'rgba(0,0,0,1)',
    borderType: 'solid',
  },
  related: {
    settings: ButtonSetting,
  },
};

export default InputComponent;