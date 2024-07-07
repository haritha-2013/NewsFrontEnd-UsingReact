import React, { useState, useEffect } from 'react';
import './News.css';


const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
       

       
        
        const response = await fetch(`https://newsapi.org/v2/everything?q=global&from=2024-07-05&to=2024-07-05&sortBy=popularity&apiKey=${API_KEY}`);
       
       
       
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the news:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='news-container'>
      {articles.map((article, index) => (
        <div key={index} className='article'>
            <img src={article.urlToImage} alt={article.title} className="article-image" />
            <div className="article-content">
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
          </div>
        </div>
      ))}
    </div>
  );
};


export default News;