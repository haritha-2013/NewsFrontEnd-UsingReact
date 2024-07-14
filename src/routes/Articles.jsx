import React from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";

export async function articlesLoader() {
try {
  // Fetch articles
  const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/articles`);
  const articles = response.data;
  return { articles }; 
} catch (error) {
  console.error('Error fetching articles:', error);
  return { articles: [] }; 
}
}




const Articles = () => {
  const { articles } = useLoaderData(articlesLoader);

  

  if (!articles || articles.length === 0) return <div>No articles found</div>;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontFamily: 'monospace', paddingBottom: '24px' }}>Articles</h1>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;