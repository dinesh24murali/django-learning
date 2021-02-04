import React, { useEffect, useRef } from 'react'
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

function App() {

  const token = useRef(null);

  function wow() {
    axios.post('http://localhost:9852/get_user/', {
      username: 'admin'
    }, {
      headers: {
        Authorization: `Token ${token.current}`,
      }
    })
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  }

  useEffect(() => {
    axios.post('http://localhost:9852/login/', {
      username: 'admin',
      password: 'admin'
    })
      .then((res) => {
        console.log(res);
        token.current = res.data.token;
        wow();
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
