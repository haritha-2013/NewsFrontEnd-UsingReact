import React from 'react';
import axios from "axios";
import { useLoaderData } from "react-router-dom";



export async function articleLoader({ params }) {
  const DB_URL = import.meta.env.VITE_API_BASE_URL
  const { articleId } = params;
  const response = await axios.get(`${DB_URL}/articles/${articleId}`);
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