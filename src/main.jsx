import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/Home/Home';
import Country from './assets/Country/Country';
import Btn from './assets/Btn/Btn';
import Quize from './assets/Quize/Quize';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<h3 className='text-7xl text-purple-400 font-bold'>Welcomr to Rest Country Home Page</h3>
      },
      {
        path:'/country',
        element:<Country></Country>,
        loader:()=> fetch(`https://restcountries.com/v3.1/all`)
      },
      {
        path:'btn-details/:id',
        element:<Btn></Btn>,
        loader:({params})=>fetch(`https://restcountries.com/v3.1/capital/${params.id}`)
      },
      // {
      //   path:'quize',
      //   element: <Quize></Quize>,
      //   loader:()=>fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=fish`)
      // }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
