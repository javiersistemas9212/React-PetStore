import React from 'react'
import { Header } from './Header'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth';

export const PrivateLayout = () => {

  const { auth } = useAuth();
  
  return (
   <>
    <Header />

    <section className='layaout_content'>

    { auth._id ?
        <Outlet />
        : 
        <Navigate to="/Home" />
      }       

    </section>



   </>
  )
}
