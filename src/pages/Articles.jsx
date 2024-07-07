import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";




const Articles = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/articles/${articleId}`);
        setArticle(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching article:', error);
        setLoading(false);
        
      }
    };

    if (articleId) {
      fetchArticle();
    }
  }, [articleId]);

  if (loading) return <div>Loading...</div>;
  if (!article) return <div>Article not found</div>;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default Articles;