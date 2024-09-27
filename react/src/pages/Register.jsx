import React, { useState } from 'react';
import { useUser } from '../context/UserContext'; // Importa el contexto
import './Register.css';

const Register = () => {
    const { register } = useUser(); // Obtén la función de registro del contexto
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            alert('Email no válido, ingrese nuevamente la información');
            return;
        }
        if (password.length < 6) {
            alert('La contraseña debe ser mínimo de 6 caracteres');
            return;
        }
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden, ingrese nuevamente la información');
            return;
        }

        // Llama a la función register desde el contexto
        await register(email, password);
        
        // Aquí puedes redirigir o mostrar un mensaje según sea necesario
        alert('🪪 Registro realizado con éxito');
    };

    return (
        <>
            <div className='registro'>
                <h1>Registro</h1>
                <form onSubmit={handleSubmit}>
                    <div className='recuadroRegistro'>
                        <label htmlFor="email">Email </label>
                        <input
                            required
                            type="email"
                            id='email'
                            value={email}
                            placeholder="Introduce tu email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='recuadroRegistro'>
                        <label htmlFor="password">Contraseña </label>
                        <input
                            required
                            type="password"
                            id='password'
                            value={password}
                            placeholder="Introduce tu contraseña"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='recuadroRegistro'>
                        <label htmlFor="confirmPassword">Confirmar Contraseña </label>
                        <input
                            required
                            type="password"
                            id='confirmPassword'
                            value={confirmPassword}
                            placeholder="Confirma tu contraseña"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button className='boton' type='submit'>Registrar</button>
                </form>
            </div>
        </>
    );
};

export default Register;
