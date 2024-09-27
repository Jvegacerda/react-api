import React, { useState } from 'react';
import { useUser } from '../context/UserContext'; 
import './Login.css';

const Login = () => {
    const { login } = useUser(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) { alert('Email no válido, ingrese nuevamente la información');
            return;
        }
        if (password.length < 6) {alert('La contraseña debe ser mínimo de 6 caracteres');
            return;
        }

        const errorMessage = await login(email, password); 

        if (!errorMessage) {alert("🔓 Acceso realizado con éxito"); 
        } else {alert(`🔒 ${errorMessage}`); // Muestra error " texto " que proviene de UserContext.jsx
        }
    };

    return (
        <div className='login'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className='recuadroLogin'>
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
                <div className='recuadroLogin'>
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
                <button className='boton' type='submit'>Acceder</button>
            </form>
        </div>
    );
};

export default Login;
