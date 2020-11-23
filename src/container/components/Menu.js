import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'

const Menu = (props) => {
  return (

    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">URL-Riken Merc</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link onClick={() => props.hjem()}>Hjem</Nav.Link>
        <Nav.Link onClick={() => { props.tilProduktListen()}}>Produkter</Nav.Link>
        <Nav.Link onClick={() => { props.tilShoppingCart()}}>Handlekurv</Nav.Link>
    </Nav>    
  </Navbar>

  );
}


export default Menu;