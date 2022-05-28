import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import api from '../../services/api'

import FlashMessage from './components/flashMessage'
import Load from './components/load'

import action from '../../store/actions'

const Login = () => {
    const [ error, setError ] = useState(false)
    const [ load, setLoad ] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async event => {
        event.preventDefault()
        setLoad(true)

        const name = event.target[0].value,
            password = event.target[1].value

        try {
            const { token } = await api.getToken({
                name,
                password
            })
    
            const admin = action.loginAdminAction(await api.getAdmin( token ))

            dispatch(admin)
            setLoad(false)
            navigate('/')
        } catch (err) {
            setError(true)
        }
    }

  return (
    <>
        <section className='login-section'>
            <div className='login'>
                <div className='login-title'>
                    <h2>Login</h2>  
                </div>
                <form className='form' onSubmit={ handleSubmit }>
                    <label htmlFor="email">Nome</label>
                    <input id='email' type="text" placeholder='Digite seu nome' />
                    <label htmlFor="password">Senha</label>
                    <input id='password' type="text" placeholder='Digite sua senha' />
                    { error ? <FlashMessage message="Senha ou Nome incorretos" /> : null }
                    <button className='button' type='submit'>{ load ? <Load /> : "Logar"}</button>
                </form>
            </div>
        </section>
    </>
  )
}

export default Login