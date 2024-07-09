import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import axios from 'axios';
import AuthorCard from '../components/AuthorCard'


export async function authorsLoader() {
  const response = await axios.get('http://localhost:3000/authors');
  return response.data;
}

const Authors = () => {
  const authors = useLoaderData();
 

  if (!authors || authors.length === 0) return <div>No authors found</div>;

  return (
    <div>
      <h1>Authors</h1>
      <ul>
        {authors.map(author => (
          <li key={author.id}>
            <AuthorCard author={author} />
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Authors;