import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjectById } from '../store/repoSlice';
import { Link } from 'react-router-dom';
import NotFound from './NotFound';

import Container from 'react-bootstrap/Container';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Detail = () => {
  const params = useParams();
  const userName = params.user;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector(state => state.repos);
  useEffect(() => {
    dispatch(fetchProjectById(userName));
  }, []);

  if (user === undefined) {
    return <NotFound />;
  }

  console.log(userName);
  console.log('user', user);
  console.log('params', params)



  return (
    <Container >
      <Card className="card" style={{ width: '20rem' }}>
        <Card.Img variant="top" src={user.avatar_url} />
        <Card.Body>
          <Card.Title>Имя: {user.name}</Card.Title>
          <Card.Text>
            <div className="card__profile">
              <span>Профиль: </span>
              <Link to={user.html_url}>{user.html_url}</Link>
            </div>

            <div className="repo">
              <span>Репозитории: </span>
              {user.public_repos}
            </div>

            <div className="folowers">
              <span>Подписчики: </span>
              {user.followers}
            </div>

            <div className="stars">
            <span>Местоположение: </span>
              {user.location}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Button className='mt-3' onClick={() => navigate(-1)}>Назад</Button>
    </Container>
  );
};

export default Detail;
