import React from "react";
import "../components/Cards.css"





function AuthorCard({ author}) {
   
    return (
        <div className="author-card">
            <article className="authors">
            <h3 >{author.name}</h3>
            <p>{author.bio}</p>
              <img  src ={author.image} alt={author.name} />
            
            </article>
        </div>
    )
}



export default AuthorCard