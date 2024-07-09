import React from "react";
import { useLoaderData,  } from "react-router-dom";
import axios from 'axios';
import "../components/Cards.css"

export async function authorDetailLoader({ params }) {
  const response = await axios.get(`http://localhost:3000/authors/${params.authorId}`);
  return response.data;
}

const AuthorDetail = () => {
  const author = useLoaderData();





  return (
    <div className="author-container">
      <div className="author-card" >
      <h1 >{author.name}</h1>
      <p style={{fontSize:'0.9rem' ,color: 'black'}}>{author.bio}</p>
      <img src={author.image} alt={author.name} />
      </div>
      
    </div>
  );
};

export default AuthorDetail;
