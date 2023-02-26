import React from 'react';
import { ArticleType } from './Article.styles';

const Article = ({ children, ...props }) => {
  return <ArticleType {...props}>{children}</ArticleType>;
};

export default Article;
