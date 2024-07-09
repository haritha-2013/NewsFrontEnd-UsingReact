import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Layout from './routes/Layout';
import ErrorPage from './Error-page';
import Articles,{ articlesLoader} from './routes/Articles';
import Article, {articleLoader }from './routes/Article'
import Authors, { authorsLoader} from './routes/Authors';
import AuthorDetail, { authorDetailLoader } from './routes/AuthorDetail';
import Home, { homeLoader} from './routes/Home';
import MainPage from './routes/MainPage';

const router = createBrowserRouter([
  {
    path: "/",
    element:< Layout /> ,
    errorElement: <ErrorPage />,
  

  children:  [
    {
      path: "/" ,
      element : < MainPage/>

    }, 
   
    {
      path: "home" ,
      element: <Home />,
      loader : homeLoader,
    },
  
    {
      path: "/articles",
      element: <Articles/>,
      loader: articlesLoader
    },

    { 
      path: "/articles/:articleId",
      element: <Article/>,
      loader: articleLoader

    },

    {
      path: "/authors",
      element: <Authors/>,
      loader: authorsLoader

    },
    {
      path: "authors/:authorId",
      element: <AuthorDetail/>,
      loader: authorDetailLoader
    }
  ],
},
]);

  
   

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
);
