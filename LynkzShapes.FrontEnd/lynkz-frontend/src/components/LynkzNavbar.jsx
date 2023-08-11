import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SuperMegaWowLogo from '../img/lynkz_header_img.png';

const LynkzNavbar = () => {
  return (
    <Navbar style={{ backgroundColor: '#032233' }} variant="dark">
      <Navbar.Brand href="/">
        <img
          src={SuperMegaWowLogo}
          width="300"
          height="auto" 
          className="d-inline-block align-top"
          alt="SuperMegaWowLogo"
        />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Item className="text-white" style={{ fontSize: '14px', marginRight: '1rem' }}>
          Lynkz Coding Challenge - Paul Vidler
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default LynkzNavbar;

