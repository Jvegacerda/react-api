import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useCart } from "../src/context/cartcontext"; 

function Producto() {
  const { getTotalAmount } = useCart(); 
  const token = false; // Simula el estado del token para cambiar entre login/profile register/logout

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Pizzeria Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '40px' }} navbarScroll>
            <Link to="/">
              <Button variant="outline-light" className="me-1">🍕 Home</Button>
            </Link>
            <Button variant="outline-light" className="me-1">
              {token === false ? ( <Link to="/login"><p>🔒 Login</p></Link>) : (<Link to="/profile"><p>🔓 Perfil</p></Link>)}
            </Button>
            <Button variant="outline-light" className="me-1">
              {token === false ? (<Link to="/register"><p>🔐 Registro</p></Link>) : (<Link to="/logout"><p>🔒 Logout</p></Link>)}
            </Button>
          </Nav>
          <Form className="d-flex">
            <Link to="/cart">
              <Button variant="outline-primary">🛒 Total: ${getTotalAmount().toLocaleString()}</Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Producto;
