import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Container, Card } from 'react-bootstrap';

export const NotFound = () => {
  return (
    <Container className="my-4">
            <Card>
                <Card.Body>
                    <Card.Title>Error 404</Card.Title>
                    <Card.Text>Pagina no encontrada</Card.Text>
                    <Link to="/">
                    <Button variant="primary">Regresar al home</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Container>
  )
}
