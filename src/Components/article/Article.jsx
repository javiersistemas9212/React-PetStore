import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Global } from '../../helpers/Global';

export const Article = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [articleitem, setarticleitem] = useState({}); 

    useEffect(() => {

        async function fetchData() {
            const request = await fetch(Global.url + "article/articlebyid/" + id, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })

                      
            const data = await request.json();
           
            if (data.status == "success") {

                setarticleitem(data.article);
                console.log(articleitem);


            } else {
                console.log("Error");
                navigate("/Store/Articles");                
               
            }

        }

        fetchData();

    }, []);


    return (
        <>
        <br />
        <br />
        <br />

         <div className='container'>
            <header className='content__header'>
                <h5 className='content__title'>Producto 1</h5>
            </header>
        </div>
    

            <div className='row'>
                <div className='col s4'>
                  <i style={{"font-size": "30px"}} class="fa-solid fa-magnifying-glass-plus right-align right"></i>
                  <i style={{"font-size": "30px"}} class="fa-solid fa-magnifying-glass-minus"></i>
                
                    <div className='imagenArticle'>
                       <img src={Global.url + "article/img/" + articleitem.image } alt='imagen' />
                    </div>
                </div>
                <div className='col s4'>
                    <p>
                        <label className='descuento'>Antes: { articleitem.price + (articleitem.price /10) } </label>
                        <label className='newprice'>Ahora: {articleitem.price} unidad</label>
                        <span className='cantidad'>Stock: { articleitem.amount } </span>
                    </p>
                    
                </div>
                <div className='col s1'>
                    <label>Cantidad</label>
                    <input type='number' />
                    <button className='btn'>Comprar</button>
                  </div>

            </div>
            <div className='row'>
                <div className='col s4'>

                </div>
            </div>
            <div className='row'>

            </div>


        </>
    )
}
