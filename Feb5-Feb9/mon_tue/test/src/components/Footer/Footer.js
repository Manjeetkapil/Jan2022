import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./Footer.css"

function Footer() {
  return <div>
      <Navbar bg="primary" variant="light" fixed="bottom">
    <Container className='footer'>
    <h2 >This is footer!</h2>
    </Container>
  </Navbar>
  </div>;
}

export default Footer;
