import React from 'react';
import { Text } from './Text.styles';
import { useNode } from '@craftjs/core';
import ContentEditable from 'react-contenteditable';

const TextComponent = ({ text, ...props }) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
    hasSelectedNode,
    hasDraggedNode,
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected.size > 0,
    hasDraggedNode: state.events.dragged.size > 0,
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
  rules: {
    canDrag: (node) => node.data.props.children !== 'Drag',
  },
};

export default TextComponent;
