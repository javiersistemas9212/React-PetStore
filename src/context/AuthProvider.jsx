import React from 'react';
import { useState, useEffect, createContext } from 'react';
import { Global } from '../helpers/Global';
import { Navigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        authUser();
    },[]);
    
    const authUser = async() => {
        // Sacar datos usuario identificado del localstorage
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");

        // Comprobar si tengo el token y el user
        if(!token || !user){
            setLoading(false);
            return false;
        }

        // Transformar los datos a un objeto de javascript
        const userObj = JSON.parse(user);
        const userId = userObj.id;

        // Petición ajax al backend que compruebe el token y
        // que me devuelva todos los datos del usuario
        const request = await fetch(Global.url + "user/profile/" + userId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const data = await request.json();
        
        console.log(request);
        if(request.status != 200){
            Navigate("/Store/Logout");
            
        }

        // Setear el estado de auth
        setAuth(data.user);
        setLoading(false);
    }

  return (<AuthContext.Provider 
            value={{
                auth,
                setAuth,
                loading
            }}
        >
    {children}
  </AuthContext.Provider>
  )
}

export default AuthContext;
