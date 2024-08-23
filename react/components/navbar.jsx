import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Producto() {
    const total = 25000
    const token = true

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Pizzeria Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '40px' }} navbarScroll>
            
          <Button variant="outline-light" className="me-1"> 🍕 Home </Button>
            <Button variant="outline-light" className="me-1"> {token == false? <p>🔒 login</p>:<p>🔓 profile</p>} </Button>
            <Button variant="outline-light" className="me-1"> {token == false? <p>🔐 register</p>:<p>🔒 logout</p>} </Button>
            
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-primary"> 🛒 Total: {total.toLocaleString()}</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export  default  Producto;
