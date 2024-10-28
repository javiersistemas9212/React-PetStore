import React from 'react'
import { useForm } from '../../hooks/useForm';
import { toast, ToastContainer } from 'react-toastify';
import { Global } from '../../helpers/Global';
import { useNavigate } from 'react-router-dom';

export const CreateArticle = () => {

    
  const { Form, changed } = useForm({});
  const navigate = useNavigate();

  const saveArticle = async (e) => {

    e.preventDefault();

    let newform = Form;
    const request = await fetch(Global.url + "article/create", {
      method: "POST",
      body: JSON.stringify(newform),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data = await request.json();

    if (data.status == "success") {
      toast.success(' Articulo guardado correctamente. ',{ autoClose:false,
                                                      closeOnClick: true,
                                                      theme: "colored"
         }); 

         const fileInput = document.querySelector("#file");
         if(data.status == "success" && fileInput.files[0]){
            
          // Recoger imagen a subir
          const formData = new FormData();
          formData.append('file0', fileInput.files[0]);

          // Petición para enviar el fichero
          const uploadRequest = await fetch(Global.url + "article/upload/"+ data.article._id, {
              method: "POST",
              body: formData,
              //headers: {
                //"Authorization": token
              //}
          });
          const uploadData = await uploadRequest.json();
 
          if(uploadData.status == "success"){

             // delete uploadData.user.password;              
              //setAuth(uploadData.user);     
              navigate("/Store/Articles");         
          }

      }else{
        navigate("/Store/Articles");
      }      

    } else {
      toast.warn(' Error al guardar el articulo ' + data.message,{ autoClose:false,
        closeOnClick: true,
        theme: "colored" });
    }  
    
  }


    return (
        <>
            <ToastContainer />


            <div className="content__posts">


                <header className="content__header content__header__public">
                    <h1 className="white-text">Nuevo articulo</h1>
                </header>

                <form className='register-form' onSubmit={saveArticle}>

                    <div className='form-group white-text'>
                        <label htmlFor='name'>Nombre</label>
                        <input type='text' name='name' onChange={changed} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='desc'>Descripción</label>
                        <textarea name='desc' onChange={changed} cols="100" rows="100"></textarea>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='price'>Precio</label>
                        <input type='text' name='price' onChange={changed} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='amount'>Cantidad</label>
                        <input type='number' name='amount' onChange={changed} />
                    </div>
                    <div className='form-group'>
                       <label htmlFor='file'>Imagen</label>                     
                      <input type="file" name="file0" id="file" />
                    </div>
                    <div>
                        <input type='submit' className='btn btn-success' value="Guardar" id='btnpantalla' />
                    </div>


                </form>

            </div>

        </>

    )
}
