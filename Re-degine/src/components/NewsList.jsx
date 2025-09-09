import React from 'react'
import {Link} from 'react-router-dom'

function NewsList(news) {
  return (
    <div className="col">
    <div className="card" style={{ width: "18rem" }}>
    <img src={news.urlToImage}  className="card-img-top" alt="..." />
    <div className="card-body">
        <h5 className="card-title">{news.title}</h5>
        <p className="card-text">{news.description}</p>
      <Link to={news.url} target='_blank'  className="btn btn-dark">Read News</Link>
    </div>
    </div> 
    </div> 
  )
}

export default NewsList
