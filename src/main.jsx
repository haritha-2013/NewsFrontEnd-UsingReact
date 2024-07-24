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
import Signup from './routes/Signup';
import Login from './routes/Login'
import Logout from './routes/Logout'

import store from './app/store'
import { Provider } from 'react-redux'





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
    },
    {
      path: "/signup",
      element: <Signup/>
    },
    {
      path: "/login",
      element: <Login/>
    },

    {
      path: "/logout",
      element: < Logout/>
    }
  ],
},
]);

  
   

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
  </React.StrictMode>,
);
