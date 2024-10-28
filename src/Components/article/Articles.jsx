import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth';
import { Global } from '../../helpers/Global';
import { NavLink } from 'react-router-dom';

export const Articles = () => {

    const { auth } = useAuth();
    const [articleitem, setarticleitem] = useState([]);
    const [isauth, setisauth] = useState(true);

    useEffect(() => {

        if (Object.keys(auth).length == 0) {
            setisauth(false);
            console.log(isauth);
        }

        async function fetchData() {

            const request = await fetch(Global.url + "article/list", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const data = await request.json();
            setarticleitem(data.articles);

        }

        fetchData();
    }, []);




    return (
        <>
            <header className="content__header">
                <h1 className="content__title">Tienda</h1>

                {
                    isauth &&
                    <NavLink to="/Store/NewArticle" className="btn" >
                        Nuevo articulo
                    </NavLink>

                }

            </header>


            <div className='container'>

                <div className='row'>

                    {
                        articleitem.map(article => {

                            return (
                                <div className='col s6 m3' key={article._id}>
                                    <div className='BoxArticle'>
                                        <div className="ImageArticle" >
                                            <img src={Global.url + "article/img/" + article.image} alt='Imagen articulo' />
                                        </div>
                                        <div className='BodyArticle'>
                                            <label className='NameArticle'>{article.name}</label>
                                            <span className='PriceArticle'>{article.price}</span>
                                            <div className='OptionsArticle'>
                                                <NavLink to={"/Store/Article/" + article._id} className='btn btn-success'><i className="fa-solid fa-cart-shopping"></i></NavLink>
                                                <NavLink to={"/Store/Article/" + article._id} className='btn btn-default'><i className="fa-solid fa-eye"></i></NavLink>
                                            </div>

                                            {
                                                isauth &&
                                                <NavLink to={"/Store/DeleteArticle/" + article._id} className="col s12 white-text red lighten-2 btn">
                                                    <i className="fa-solid fa-trash-can"></i>
                                                </NavLink>
                                            }
                                        </div>
                                    </div>

                                </div>
                            )
                        })

                    }

                </div>

            </div>





            <div className="content__container-btn">
                <button className="content__btn-more-post">
                    Ver mas publicaciones
                </button>
            </div>
        </>
    )
}
