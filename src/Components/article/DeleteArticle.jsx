import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Global } from '../../helpers/Global';

export const DeleteArticle = () => {

    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {

        async function fetchData() {
            const request = await fetch(Global.url + "article/delete/" + id, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })


            const data = await request.json();
            console.log(data);

            if (data.status == "success") {
                toast.success(' Articulo eliminado ', {
                    autoClose: false,
                    closeOnClick: true,
                    theme: "colored"
                });

            } else {
                toast.warn(' Error al eliminar registro ' + data.message, {
                    autoClose: false,
                    closeOnClick: true,
                    theme: "colored"
                });
            }

        }

        fetchData();

        // Navigate (redireccion) al login
        navigate("/Store/Articles");
    }, []);

    return (
        <div> <ToastContainer /></div>
    )
}
