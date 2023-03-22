import './App.css';
import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Main />} />
        <Route path="/project/:user" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
