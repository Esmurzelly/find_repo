import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import search from '../assets/img/search.svg';

const InputField = ({ keyWord, setKeyWord, onSearch }) => {
  return (
    <InputGroup style={{ backgroundColor: '#A2A3A4' }} className="mb-3 p-4">
      <Form.Control
        placeholder="Начните вводить текст для поиска (не менее трех символов)"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        value={keyWord}
        onChange={e => setKeyWord(e.target.value)}
      />
      <Button>
        <img onClick={onSearch} src={search} alt="search" />
      </Button>
    </InputGroup>
  );
};

export default InputField;
