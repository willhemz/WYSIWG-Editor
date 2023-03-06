import React from 'react';
import { Text } from './Text.styles';
import TextSetting from './TextSetting';
import { useEditor, useNode } from '@craftjs/core';
import ContentEditable from 'react-contenteditable';

const TextComponent = ({ text, ...props }) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
    hasSelectedNode,
  } = useNode((store) => ({
    hasSelectedNode: store.events.selected,
  }));

  const { enabled } = useEditor((store) => ({ enabled: store.options.enabled }));

  const [editable, setEditable] = React.useState(false);

  React.useEffect(() => {
    !hasSelectedNode && setEditable(false);
  }, [hasSelectedNode]);

  return (
    <Text
      variant={enabled && 'selected'}
      onClick={() => hasSelectedNode && setEditable(true)}
      ref={(ref) => connect(drag(ref))}
      {...props}
    >
      <ContentEditable
        disabled={!editable}
        html={text}
        onChange={(e) =>
          setProp((props) => (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, '')))
        }
        tagName='span'
      />
    </Text>
  );
};

export const textProps = {
  text: 'Hello World!',
  fontSize: 16,
  lineHeight: 24,
  width: 'auto',
  height: 'auto',
  color: 'rgba(0,0,0,1)',
  background: 'transparent',
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  marginTop: 0,
  marginBottom: 0,
  marginRight: 0,
  marginLeft: 0,
  textAlign: 'left',
  fontWeight: 400,
  flexBasis: 0,
};

TextComponent.craft = {
  props: textProps,
  rules: {
    canDrag: (node) => node.data.props.text !== 'Drag',
  },
  related: {
    settings: TextSetting,
  },
};

export default TextComponent;
