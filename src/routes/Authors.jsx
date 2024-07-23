import React from "react";
import { useLoaderData, Link, useRouteError } from "react-router-dom";
import axios from 'axios';
import AuthorCard from '../components/AuthorCard'
const DB_URL = import.meta.env.VITE_API_BASE_URL

export async function authorsLoader() {
  try {
    const response = await axios.get(`${DB_URL}/authors`);
    return response.data;
  } catch (error) {
    throw new Response("Error fetching authors", { status: 500, statusText: error.message });
  }
}


const Authors = () => {
  const authors = useLoaderData();
  const error = useRouteError();
 
  if (error) {
    return <div>Error: {error.statusText}</div>;
  }

  if (!authors || authors.length === 0) return <div>No authors found</div>;

  return (
    <div>
      <h1 style={{ textAlign:'center', fontFamily: 'monospace' }}>Authors</h1>
      <ul style={{ listStyle: 'none' }}>
        {authors.map(author => {
          console.log(author); 
          return (
            <li key={author._id}>
              <Link style={{ textDecoration: 'none' }} to={`/authors/${author._id}`}>
                <AuthorCard author={author} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Authors;