import React from 'react';

import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

import CardInfo from './CardInfo';

const CardsList = ({ projects, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container className="list-group flex-row">
      {projects.map(project => (
        <CardGroup key={project.id} className="list-group-item flex-wrap">
          <CardInfo project={project} />
        </CardGroup>
      ))}
    </Container>
  );
};

export default CardsList;
