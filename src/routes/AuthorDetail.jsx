import React from "react";
import { useLoaderData,  } from "react-router-dom";
import axios from 'axios';

export async function authorDetailLoader({ params }) {
  const response = await axios.get(`http://localhost:3000/authors/${params.authorId}`);
  return response.data;
}

const AuthorDetail = () => {
  const author = useLoaderData();



if (error) {
    return <div>Error: {error.statusText}</div>;
  }

  return (
    <div className="author-container">
      <h1>{author.name}</h1>
      <p>{author.bio}</p>
      <img src={author.image} alt={author.name} />
    </div>
  );
};

export default AuthorDetail;
