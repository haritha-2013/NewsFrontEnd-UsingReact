import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Layout from './pages/Layout'
import ErrorPage from './Error-page';
import Articles from './pages/Articles';
import Authors from './pages/Authors';
import News from './pages/News';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element:< Layout /> ,
    errorElement: <ErrorPage />,

  children:  [
    {
      index: true,
      element: <News />,
    },

    {
      path: "news" ,
      element: <News />,

    },
    {
      path: "home" ,
      element: <Home />,
    },
    {
      path: "article/:articleId",
      element: <Articles/>,
    },
    {
      path: "authors/:authorId",
      element: <Authors />
    }
  ],
},
]);

  
   

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
