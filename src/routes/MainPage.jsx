import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleCard from '../components/ArticleCard';
const DB_URL = import.meta.env.VITE_API_BASE_URL

const MainPage = () => {
  const [articles, setArticles] = useState([]);
  const [loginStatus, setLoginStatus] = useState(false);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`${DB_URL}/articles`);
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchArticles();

    const fetchVerification = async () => {
      try {
        const verifyResponse = await axios.get(`${DB_URL}/auth/verify`, {
          withCredentials: true,
        });
        setLoginStatus(verifyResponse.data.verified);
      } catch (error) {
        console.error('Error fetching verification:', error);
      }
    };

    fetchVerification();
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', paddingBottom: '24px' }}>Daily Updates</h1>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
      <div>Login Status: {loginStatus ? 'Verified' : 'Not Verified'}</div>
    </div>
  );
};

export default MainPage;
