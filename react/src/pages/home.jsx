import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './home.css';
import { useEffect, useState } from "react";
import CardPizza from '../../components/CardPizza';
import { useCart } from '../context/cartcontext'; 

export default function Home(props) {
    const [pizzas, setPizzas] = useState([]);
    const { addPizza } = useCart(); 

    useEffect(() => {
        fetchPizzas();
    }, []);

    const fetchPizzas = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/pizzas');
            if (!response.ok) {
                throw new Error('La api no funciona');
            }
            const data = await response.json();
            console.log(data);
            setPizzas(data);
        } catch (error) {
            console.error('Error del fetch', error);
        }
    };

    const handleAddPizza = (pizza) => {
        addPizza(pizza); 
    };

    return (
        <div>
            <Container>
                <Row>
                    {pizzas.map(item => (
                        <Col key={item.id} md={4} className="mb-4">
                            <CardPizza className='card' 
                                id={item.id}         
                                name={item.name} 
                                price={item.price} 
                                ingredients={item.ingredients} 
                                img={item.img}
                                onAddToCart={() => handleAddPizza(item)} 
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
