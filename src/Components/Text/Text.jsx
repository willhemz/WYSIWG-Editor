import React from 'react';
import { Text } from './Text.styles';
import TextSetting from './TextSetting';
import { useNode } from '@craftjs/core';
import ContentEditable from 'react-contenteditable';

const TextComponent = ({ text, ...props }) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
    hasSelectedNode,
    hasDraggedNode,
  } = useNode((store) => ({
    hasSelectedNode: store.events.selected,
    hasDraggedNode: store.events.dragged,
  }));
  const [editable, setEditable] = React.useState(false);

  React.useEffect(() => {
    !hasSelectedNode && setEditable(false);
  }, [hasSelectedNode]);

  return (
    <Text
      variant={hasSelectedNode && 'selected'}
      onClick={() => setEditable(true)}
      ref={(ref) => connect(drag(ref))}
      {...props}
    >
      <ContentEditable
        disabled={!editable}
        html={text}
        onChange={(e) =>
          setProp((props) => (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, '')))
        }
        tagName='p'
      />
    </Text>
  );
};

TextComponent.craft = {
  props: {
    text: 'Hello World!',
    fontSize: 16,
    lineHeight: 24,
    width: 'auto',
    height: 'auto',
    color: 'rgba(0,0,0,1)',
    background: 'transparent',
    padding: 0,
    margin: 0,
    textAlign: 'left',
    fontWeight: 400,
  },
  rules: {
    canDrag: (node) => node.data.props.text !== 'Drag',
  },
  related: {
    settings: TextSetting,
  },
};

export default TextComponent;
