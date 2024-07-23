import React from "react";
import { useLoaderData,  } from "react-router-dom";
import axios from 'axios';
import "../components/Cards.css"
const DB_URL = import.meta.env.VITE_API_BASE_URL

export async function authorDetailLoader({ params }) {
const response = await axios.get(`${DB_URL}/authors/${params.authorId}`);
return response.data;
}

const AuthorDetail = () => {
  const author = useLoaderData();





  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh' // Full height of the viewport
  }}>
      <div style={{
                background: '#fff',
                border: '1px solid #ddd',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                padding: '16px',
                maxWidth: '300px',
                textAlign: 'center' // Center the text content
            }}>
      <h1 >{author.name}</h1>
      <p style={{fontSize:'0.9rem' ,color: 'black'}}>{author.bio}</p>
      <img src={author.image} alt={author.name} style={{maxWidth: '100%', 
        height: 'auto', borderRadius: '20%' }}/>
      </div>
      
    </div>
  );
};

export default AuthorDetail;
