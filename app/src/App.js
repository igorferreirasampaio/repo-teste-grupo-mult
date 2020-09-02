import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { Menu } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Menu>
        <Routes />
      </Menu>
    </BrowserRouter>
  );
}

export default App;