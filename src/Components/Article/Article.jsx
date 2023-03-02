import React from 'react';
import { ArticleType } from './Article.styles';
import { useEditor, useNode } from '@craftjs/core';
import SectionSettings from '../Container/SectionSettings';
import { genProps } from '../Container/Container';

const Article = ({ children, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  const { enabled } = useEditor((store) => ({ enabled: store.options.enabled }));
  return (
    <ArticleType variant={enabled && 'selected'} ref={(ref) => connect(drag(ref))} {...props}>
      {children}
    </ArticleType>
  );
};

Article.craft = {
  props: genProps,
  related: {
    settings: SectionSettings,
  },
};

export default Article;
