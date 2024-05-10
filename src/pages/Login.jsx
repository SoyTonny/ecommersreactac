import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hook/useAuth';

const Login = () => {

  const [hasToken, setHasToken] = useState();
  const loginUser = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setHasToken(localStorage.getItem('token'))
  }, [])
  

  const { handleSubmit, register, reset } = useForm();

  const submit = data => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
    loginUser(url, data);

    reset({
      email: '',
      password: ''
    });
    setTimeout(() => {
      setHasToken(localStorage.getItem('token'));
      navigate('/cart');
    }, 3000);
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setHasToken();
  }

  return (
    <>
      {
        hasToken ?
          <button onClick={handleLogout}>Logout</button>
          :
          <div>
            <form onSubmit={handleSubmit(submit)}>
              <div>
                <label htmlFor="email">Email</label>
                <input {...register('email')} id='email' type="email" />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input {...register('password')} id='password' type="password" />
              </div>
              <button>Login</button>
            </form>
            <p>Si tu no estas registrado aun, <Link to='/register'>REGISTRATE!</Link></p>
          </div>
      }
    </>
  )

}

export default Login