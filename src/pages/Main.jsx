import { useState, useEffect } from 'react';
import axios from 'axios';
import CardsList from '../components/CardsList';
import Pagination from '../components/Pagination';
import InputField from '../components/InputField';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRepos } from '../store/repoSlice';


const Main = () => {
  const repos = useSelector(state => state.repos.repos);
  const dispatch = useDispatch();

  const [keyWord, setKeyWord] = useState('');

  const [result, setResult] = useState([]);

  const [loading, setLoading] = useState(false); // work
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(6);

  const api = 'https://api.github.com/search/repositories?q=';

  const findNewRepo = async () => {
    const res = await axios.get(`${api}/${keyWord}`);
    dispatch(fetchRepos(`${keyWord}`))
    setResult(res.data.items)
  }

  console.log(repos)

  const lastProjectIndex = currentPage * projectsPerPage;
  const firstProjectIndex = lastProjectIndex - projectsPerPage;
  const currentProject = result.slice(firstProjectIndex, lastProjectIndex);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => setCurrentPage(prev => prev + 1);
  const prevPage = () => setCurrentPage(prev => prev - 1);

  return (
    <Container className='wrapper'>
      <Row>
        <Col>
          <InputField
            keyWord={keyWord}
            onSearch={findNewRepo}
            setKeyWord={setKeyWord}
          />
        </Col>
      </Row>

      <Row>
        <CardsList loading={loading} projects={currentProject} />
      </Row>

      <Row className='m-4 fixed-bottom'>
        <Col>
          <select>
            <option value="10" defaultValue={10}>
              10
            </option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </Col>
        <Col xs={7}>
          <Pagination
            totalCards={result.length}
            paginate={paginate}
            cardsPerPage={projectsPerPage}
          />
          <button className="btn btn-primary" onClick={prevPage}>
            Prev Page
          </button>
          <button className="btn btn-primary ms-2" onClick={nextPage}>
            Next Page
          </button>
        </Col>
      </Row>
    </Container>
  )
}

export default Main