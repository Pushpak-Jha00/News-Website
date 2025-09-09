import React, { useContext } from "react";
// import { NewsAppContext } from "../store/news-app-store";
import NewsList from "./NewsList";

function News(articles) {
  // const {articles} = useContext(NewsAppContext);
  console.log(articles);
  


  return (
    <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded body-container">
      <div className="container text-center">
        <div className="row row-gap-3">
          {articles.map((news) => (
            <NewsList news={news} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
