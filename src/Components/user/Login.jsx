import React from 'react'
import { useForm } from '../../hooks/useForm';
import { Global } from '../../helpers/global';
import { toast, ToastContainer } from 'react-toastify';

export const Login = () => {

  const { Form, changed } = useForm({});

  const login = async(e) => {

    e.preventDefault();

    let newuser = Form;
    const request = await fetch(Global.url + "user/login", {
      method: "POST",
      body: JSON.stringify(newuser),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data = await request.json();

    if (data.status == "success") {
      toast.success(' Bienvenido ' + data.user.name + ' - ' + data.user.nick, {
        autoClose: false,
        closeOnClick: true,
        theme: "colored"
      });

           // Persistir los datos en el navegador
     localStorage.setItem("token", data.token);
     localStorage.setItem("user", JSON.stringify(data.user));

           // Redireccion
           setTimeout(() => {
            window.location.reload();
          }, 1000);
          

    } else {
      toast.warn(' Error al iniciar sesión ' + data.message, {
        autoClose: false,
        closeOnClick: true,
        theme: "colored"
      });
    }

  }

  return (
    <>
     <ToastContainer />

      <header className="content__header content__header__public">
        <h1 className="content__title">Login</h1>
      </header>

      <div className="content__posts">
        <form className='register-form' onSubmit={login}>

          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' onChange={changed} />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' onChange={changed} />
          </div>
          <div>
            <input type='submit' value="Iniciar sesión" id='btnpantalla' />
            <a id='btnpantalla' >Registrarse </a>
          </div>
        </form>
      </div>

    </>
  )
}
