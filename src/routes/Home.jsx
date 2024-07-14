import axios from 'axios';
import React from 'react';

import { useLoaderData } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
export async function loader () {
  const response = await axios.get (`${import.meta.env.VITE_API_BASE_URL}/articles`);
  const articles = response.data;
  return { articles};

}

const Home = () => {
  const { articles} = useLoaderData();
  return (
    <section>
      <h1>News App Home</h1>
      <div className='articleList'>
      
      {
  articles.map(article => (
    < ArticleCard key ={article._id} article={article} />
  ))
}

      </div>
    </section>
  );
};

export const homeLoader = loader;
export default Home;