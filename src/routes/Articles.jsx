import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";


export async function articlesLoader() {
    const response = await axios.get ('http://localhost:3000/articles');
    return response.data;
}
const Articles = () => {
  const articles = useLoaderData();

  if (!articles || articles.length === 0) return <div>No articles found</div>;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px'  }}>
      <h1 style={{ textAlign: 'center' , fontFamily: 'monospace', paddingBottom : '24px'}}>Articles</h1>
      {articles.map((article) => (
        <ArticleCard  key={article.id} article={article} />
      ))}
    </div>
  );
};
export default Articles;
