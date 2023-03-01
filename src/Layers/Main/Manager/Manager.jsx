import React from 'react';
import { Editor } from './Manager.styles';
import { useEditor } from '@craftjs/core';

const Manager = () => {
  const { actions, selected } = useEditor((store, query) => {
    const [nodeId] = store.events.selected;
    let selected;
    if (nodeId)
      selected = {
        id: nodeId,
        name: store.nodes[nodeId].data.name,
        settings: store.nodes[nodeId].related && store.nodes[nodeId].related.settings,
        isDeletable: query.node(nodeId).isDeletable(),
      };
    return { selected };
  });
  console.log(useEditor());
  return selected ? (
    <Editor>
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
    <Editor>
      <em>Select an element to edit...</em>
    </Editor>
  );
};

export default Manager;
