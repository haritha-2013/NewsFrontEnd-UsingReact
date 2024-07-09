import React from "react";
import "../components/Cards.css"

function ArticleCard ({ article }) {
   
    return (
        <div  className="article-container">
            <article className="article">
            <h3 >{article.title}</h3>
              <img src ={article.image} alt={article.title} />
             <p>{article.description}</p>
            </article>
        </div>
    )
    
}

export default ArticleCard