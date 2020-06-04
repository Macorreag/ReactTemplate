import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Publications from './components/Publications'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div  className="container">
          <NavbarBrand href="/">
            Périme
          </NavbarBrand>
        </div>
      </Navbar>
      <Publications />
    </div>
  );
}

export default App;
