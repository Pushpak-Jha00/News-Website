import React from 'react'
import {Link} from 'react-router-dom'
const News = ({news}) => {
    return (
        <>
            <div className="card bg-dark text-light" style={{ width: "18rem" }}>
            <img src={!news.urlToImage ?'https://media.istockphoto.com/id/1334419989/photo/3d-red-question-mark.jpg?s=612x612&w=0&k=20&c=bpaGVuyt_ACui3xK8CvkeoVQC-jczxANZTMXGKAE11E=' : news.urlToImage} className="card-img-top" style={{height:'200px', width:'287px'}} alt="..." />
            <div className="card-body">
                <h5 className="card-title text-info">{news.title.slice(0,40)}...</h5>
                <p className="card-text">{news.description? news.description.slice(0,80) : 'Get the latest updates, insights, and breaking news from around the globe. Stay informed about trending topics, current events, and important developments'}</p>
              <Link to={news.url} target='_blank'  className="btn btn-success">Read News</Link>
            </div>          
        </div>   

                         
        </>


    )
}

export default News
