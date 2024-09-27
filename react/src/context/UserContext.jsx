import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState("");

    const login = async (email, password) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                setToken(data.token);
                setEmail(data.email);
                return null; 
            } else {
                const errorData = await response.json();
                return errorData.message || 'Usuario no registrado'; /// entrega mensaje de error a login.jsx
            }
        } catch (err) {
            console.error('Error en el login', err);
            return 'Error de red'; 
        }
    };

    const register = async (email, password) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                setToken(data.token);
                setEmail(data.email);
                return null; 
            } else {
                const errorData = await response.json();
                return errorData.message || 'Error en el registro'; 
            }
        } catch (err) {
            console.error('Error en el registro', err);
            return 'Error de red';
        }
    };

    const logout = () => {
        setEmail("");
        setToken(null);
    };

    const getProfile = async () => {
        try {
            const response = await fetch('/api/auth/me', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`, // Usar el token almacenado
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data); 
            } else {
                console.error('Error al obtener el perfil');
            }
        } catch (err) {
            console.error('Error de red al obtener el perfil', err);
        }
    };

    return (
        <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
