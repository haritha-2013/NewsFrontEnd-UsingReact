import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Authors = () => {
  const { authorId } = useParams();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/authors/${authorId}`)
      .then(response => response.json())
      .then(data => setAuthor(data))
      .catch(error => console.error('Error fetching author:', error));
  }, [authorId]);

  if (!author) return <div>Loading...</div>;

  return (
    <div>
      <h1>{author.name}</h1>
      <p>{author.bio}</p>
    </div>
  );
};

export default Authors;
