import React from 'react';
import axios from "axios";
import { useLoaderData } from "react-router-dom";

export async function articleLoader({ params }) {
  const { articleId } = params;
  const response = await axios.get(`http://localhost:3000/articles/${articleId}`);
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