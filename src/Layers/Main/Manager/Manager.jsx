import React from 'react';
import { Editor } from './Manager.styles';
import { useEditor } from '@craftjs/core';
import { useSelector } from 'react-redux';
import { Layers } from '@craftjs/layers';

const Manager = () => {
  const { isLayer } = useSelector((store) => ({
    isLayer: store.isLayer,
  }));
  const { actions, selected, enabled } = useEditor((store, query) => {
    const [nodeId] = store.events.selected;
    let selected;
    if (nodeId)
      selected = {
        id: nodeId,
        name: store.nodes[nodeId].data.name,
        settings: store.nodes[nodeId].related && store.nodes[nodeId].related.settings,
        isDeletable: query.node(nodeId).isDeletable(),
      };
    return { selected, enabled: store.options.enabled };
  });

  if (isLayer) {
    return (
      <Editor variant={!enabled && 'hide'}>
        <Layers />
      </Editor>
    );
  }

  return selected ? (
    <Editor variant={!enabled && 'hide'}>
      <header>
        <h4>{selected.name}</h4>
      </header>
      {selected.settings && React.createElement(selected.settings)}
      <footer>
        {selected.isDeletable && (
          <button onClick={() => actions.delete(selected.id)}>Delete</button>
        )}
      </footer>
    </Editor>
  ) : (
    <Editor variant={!enabled && 'hide'}>
      <em>Select an element to edit...</em>
    </Editor>
  );
};

export default Manager;
