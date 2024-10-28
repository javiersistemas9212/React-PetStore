import React from 'react'
import { useForm } from '../../hooks/useForm'
import { Global } from '../../helpers/global';
import { ToastContainer, toast } from 'react-toastify';

export const Register = () => {

  const { Form, changed } = useForm({});

  const saveuser = async (e) => {

    e.preventDefault();

    let newuser = Form;
    const request = await fetch(Global.url + "user/register", {
      method: "POST",
      body: JSON.stringify(newuser),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data = await request.json();

    if (data.status == "success") {
      toast.success(' Usuario guardado correctamente. ',{ autoClose:false,
                                                      closeOnClick: true,
                                                      theme: "colored"
         }); 

    } else {
      toast.warn(' Error al guardar el usuario ' + data.message,{ autoClose:false,
        closeOnClick: true,
        theme: "colored" });
    }  

  
    
  }


  return (
    <>      
     <ToastContainer />


      <div className="content__posts">

        
      <header className="content__header content__header__public">
        <h1 className="content__title">Registro</h1>
      </header>
      
        <form className='register-form' onSubmit={saveuser}>

          <div className='form-group'>
            <label htmlFor='name'>Nombre</label>
            <input type='text' name='name' onChange={changed} />
          </div>
          <div className='form-group'>
            <label htmlFor='surname'>Apellidos</label>
            <input type='text' name='surname' onChange={changed} />
          </div>
          <div className='form-group'>
            <label htmlFor='nick'>Nick</label>
            <input type='text' name='nick' onChange={changed} />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' onChange={changed} />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' onChange={changed} />
          </div>
          <div className='form-group'>
            <label htmlFor='role'>Role</label>
            <select name="role" onChange={changed}>
              <option value="role_user">Usuario</option>
              <option value="role_admin">Admin</option>
              <option value="role_vende">Vendedor</option>
            </select>
          </div>
          <div>
            <input type='submit' value="Guardar" id='btnpantalla' />
          </div>


        </form>

      </div>

    </>
  )
}
