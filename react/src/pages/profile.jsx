import React from 'react';
import { Button, Container, Card } from 'react-bootstrap';
import { useUser } from '../context/UserContext'; 

export const Profile = () => {
  const { logout } = useUser(); 

  return (
    <Container className="my-4">
      <Card>
        <Card.Body>
          <Card.Title>Perfil del Usuario</Card.Title>
          <Card.Text>
            <strong>Correo electrónico:</strong>
            <p>Correodemuestra@tucorreo.cl</p>
          </Card.Text>
          <Button variant="primary" onClick={logout}>
            Cerrar sesión
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};
