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
    <Text onClick={() => setEditable(true)} ref={(ref) => connect(drag(ref))} {...props}>
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
  },
  rules: {
    canDrag: (node) => node.data.props.text !== 'Drag',
  },
  related: {
    settings: TextSetting,
  },
};

export default TextComponent;
