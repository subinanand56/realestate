import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Logo from '../Assets/logo.jpg';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <a className="navbar-brand">
          <img className="logos w-25" src={Logo} alt="Logo" />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Search</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link>
          <Button variant="primary">Sign In</Button>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
