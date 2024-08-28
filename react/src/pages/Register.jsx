import React, { useState } from 'react'
import './Register.css'

const Register = () => {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [confirmPassword , setConfirmPassword] = useState('')

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        return re.test(String(email).toLowerCase())
    }

const handleSubmit =(e)=>{
    e.preventDefault()

    if (!validateEmail(email)) {
        alert('Email no valido, ingrese nuevamente la información')
        return
    }
    if(password.length < 6) {
        alert('La contraseña debe ser minimo de 6 caracteres')
        return
    }
    if(password !== confirmPassword) {
        alert('las contrseñas no coinciden, ingrese nuevamente la información')
        return
    }

    alert('🪪 Registro realizado con exito')

}


    return (
        <>
        <div className='registro'>
        <h1>Registro</h1>
            <form onSubmit={handleSubmit}>
                <div className='recuadroRegistro'>
                    <label htmlFor="email">Email </label>
                    <input required type="email" id='email' value={email} placeholder="Introduce tu email"
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='recuadroRegistro'>
                    <label htmlFor="password">Contraseña </label>
                    <input required type="password" id='password' value={password} placeholder="Introduce tu contraseña"
                    onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className='recuadroRegistro'>
                    <label htmlFor="confirmPassword">Confirmar Contraseña </label>
                    <input required type="password" id='confirmPassword' value={confirmPassword} placeholder="Confirma tu contraseña" 
                    onChange={(e)=>setConfirmPassword(e.target.value)}/>
                </div>
                <button className='boton' type='submit'>Registrar</button>
            </form>
        </div>
        </>
    )
}


export default Register