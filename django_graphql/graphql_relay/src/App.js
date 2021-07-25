import React, { useEffect } from 'react';

import logo from './logo.svg';
import './App.css';
import AllBooks from './graphql/query/AllBooks';
import {
  fetchQuery
} from './utils/relay';


function App() {

  const fetchBooks = () => {
    const tr = fetchQuery(AllBooks, {});
    debugger;
    const tt = tr.toPromise();
    debugger;
    tt.then(resp => {
      const tr = resp;
      debugger;
    });
  };

  useEffect(() => {
    fetchBooks();
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
