import React from 'react';

import { Container } from './styles';

interface Props {
  description: string;
  title: string;
}
const News: React.FC<Props> = ({ description, title }) => {
  return (
    <Container>
      <strong>{ title }</strong>
      <span>{ description }</span>
    </Container>
    );
}

export default News;