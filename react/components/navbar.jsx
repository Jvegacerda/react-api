import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useCart } from '../src/context/cartcontext'; 
import { useUser } from '../src/context/UserContext';
// poner atencion a rutas que estan en subcarpetas para no perder horas en errores, no es "../context/cartcontext"

function Producto() {
  const { token, logout } = useUser(); // Extraer token y logout del contexto
  const { getTotalAmount } = useCart();

  return (
    <Navbar bg="dark" expand="lg" className="bg-dark">
      <Container fluid>
        <Navbar.Brand  className="text-danger">Pizzeria Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Link to="/">
              <Button variant="outline-light" className="me-1">🍕 Home</Button>
            </Link>
            {token ? (
              <>
                <Link to="/profile">
                  <Button variant="outline-light" className="me-1">🔓 Perfil</Button>
                </Link>
                <Button variant="outline-light" className="me-1" onClick={logout}>🔒 Logout </Button>
              </>) : (<>
                <Link to="/login">
                  <Button variant="outline-light" className="me-1">🔒 Login</Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline-light" className="me-1">🔐 Registro</Button>
                </Link>
              </>
            )}
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

