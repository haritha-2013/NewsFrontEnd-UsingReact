import React from 'react';
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Articles from './Articles';

export async function articleLoader({ params }) {
  const { articleId } = params;
  const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/articles/${articleId}`);
  return response.data;
}



const Article = () => {
  const article = useLoaderData();

  if (!article) return <div>Article not found</div>;

 

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default Article;