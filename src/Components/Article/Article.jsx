import React from 'react';
import { ArticleType } from './Article.styles';
import { useNode } from '@craftjs/core';
import SectionSettings from '../Container/SectionSettings';

const Article = ({ children, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <ArticleType ref={(ref) => connect(drag(ref))} {...props}>
      {children}
    </ArticleType>
  );
};

Article.craft = {
  related: {
    settings: SectionSettings,
  },
};

export default Article;
