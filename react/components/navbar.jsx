import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Producto() {
    const total = 25000
    // **Para cambiar entre login y profile true or false en el token
    const token = true

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Pizzeria Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '40px' }} navbarScroll>
            
          <Link to="/">
            <Button variant="outline-light" className="me-1">🍕 Home</Button>
          </Link>
            <Button variant="outline-light" className="me-1"> 
              {token == false? 
              <Link to="/login"> <p>🔒 login</p> </Link>:
              <Link to="/profile"> <p>🔓 profile</p> </Link>} 
              </Button>
            <Button variant="outline-light" className="me-1"> {token == false?
              <Link to="/register"><p>🔐 register</p></Link>:
              <Link to="/profile"><p>🔒 logout</p></Link>} 

              {/* link de logout a /profile provisional */}

            </Button>
            
          </Nav>
          <Form className="d-flex">
          <Link to="/cart">
            <Button variant="outline-primary"> 🛒 Total: {total.toLocaleString()}</Button>
          </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export  default  Producto;
