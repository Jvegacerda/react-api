import React from 'react'
import { Button, Container, Card } from 'react-bootstrap';

export const Profile = () => {
  return (
    <Container className="my-4">
            <Card>
                <Card.Body>
                    <Card.Title>Perfil del Usuario</Card.Title>
                    <Card.Text>
                        <strong>Correo electrónico:</strong>
                        <p>Correodemuestra@tucorreo.cl</p>
                    </Card.Text>
                    <Button variant="primary">
                        Cerrar sesión
                    </Button>
                </Card.Body>
            </Card>
        </Container>
  )
}
