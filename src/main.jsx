
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import Provider from './Provider/Provider.jsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
    <RouterProvider router={router} />
    </Provider>
    <ToastContainer></ToastContainer>
  </React.StrictMode>,
)
