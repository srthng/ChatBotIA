import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import Chatpage from './Chatpage.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children:[
        {index:true, element: <Home />},
        {path: 'Chatbot', element: <Chatpage />}
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)