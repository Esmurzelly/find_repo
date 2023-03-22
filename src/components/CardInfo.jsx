import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import star from '../assets/img/star.svg';
import eye from '../assets/img/eye.svg';
import pen from '../assets/img/pen.svg';

const CardInfo = ({ project }) => {
  const [comment, setComment] = useState('');

  return (
    <Card className="card" style={{ width: '400px' }}>
      <Row>
        <Link className="links" to={`${project.html_url}`}>
          <h5>{project.name}</h5>
        </Link>
      </Row>

      <div className="author">
        <img
          style={{ borderRadius: '50%' }}
          width={'50px'}
          src={project.owner.avatar_url}
          alt="author"
        />
        <Link className="links" to={`${project.owner.html_url}`}>
          <span>{project.owner.login}</span>
        </Link>
      </div>

      <Row className="statistics">
        <Col className="statistics_star">
          <img src={star} alt="statistics_star" />
          <Card.Text>{project.stargazers_count}</Card.Text>
        </Col>
        <Col className="statistics_eye">
          <img src={eye} alt="statistics_eye" />
          <Card.Text>{project.watchers}</Card.Text>
        </Col>
      </Row>
      <Button >
          <Link style={{color: "white", textDecoration: 'none'}} to={`/project/${project.owner.login}}`}>Подробнее</Link>
        </Button>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Комментарий к проекту"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <Button>
          <img src={pen} alt="search" />
        </Button>
      </InputGroup>
    </Card>
  );
};

export default CardInfo;
