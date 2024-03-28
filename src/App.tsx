import React from 'react';
import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import Routing from 'Routing';

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Routing />
      </main>
    </BrowserRouter>
  );
}

export default App;
