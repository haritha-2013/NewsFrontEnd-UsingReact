
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleCard from '../components/ArticleCard'; 

const MainPage = () => {
  const [articles, setArticles] = useState([]);
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/articles`);
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();

    const fetchVerification = async () => {
      try {
        const verifyResponse = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/auth/verify`, {
          withCredentials: true,
        });
        setLoginStatus(verifyResponse.data.verified);
        console.log(verifyResponse.data);
      } catch (error) {
        console.error('Error fetching verification:', error);
      }
    };

    fetchVerification();
  }, []); 

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