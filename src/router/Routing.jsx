import React from 'react'
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"
import { PublicLayout } from '../Components/layout/public/PublicLayout'
import { Login } from '../Components/user/Login'
import { Register } from '../Components/user/Register'
import { PrivateLayout } from '../Components/layout/general/PrivateLayout'
import { Index } from '../Components/home/Index'
import { Pets } from '../Components/pet/Pets'
import { Articles } from '../Components/article/Articles'
import { AuthProvider } from '../context/AuthProvider'
import { Logout } from '../Components/user/Logout'
import { CreateArticle } from '../Components/article/CreateArticle'
import { DeleteArticle } from '../Components/article/DeleteArticle'
import { Article } from '../Components/article/Article'

export const Routing = () => {
  return (
    <BrowserRouter>
      <AuthProvider>

        <Routes>
          <Route path='/' element={<PublicLayout />} >
            <Route index element={<Index />} />
            <Route path='Login' element={<Login />} />
            <Route path='Register' element={<Register />} />
            <Route path='Home' element={<Index />} />
            <Route path='Pets' element={<Pets />} />
            <Route path='Articles' element={<Articles />} />
            <Route path='Article/:id' element={<Article />} />

          </Route>
          <Route path='/store' element={<PrivateLayout />} >
            <Route index element={<Index />} />
            <Route path='Pets' element={<Pets />} />
            <Route path='Home' element={<Index />} />
            <Route path='Articles' element={<Articles />} />
            <Route path='NewArticle' element={<CreateArticle />} />
            <Route path='Logout' element={<Logout />} />
            <Route path='DeleteArticle/:id' element={<DeleteArticle />} />
            <Route path='Article/:id' element={<Article />} />

          </Route>
        </Routes>

      </AuthProvider>
    </BrowserRouter>
  )
}
