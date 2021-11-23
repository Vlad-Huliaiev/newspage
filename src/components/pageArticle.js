import React from "react";

function PageArticle({ articles }) {
  return (
    <div className="page-article">
        <h1 className="page-article__title">{articles.headline.main}</h1>
        <p className="page-article__abstract">{articles.abstract}</p>
        <p className="page-article__content">{articles.lead_paragraph}</p>
        <p className="page-article__auth">Author original article: {articles.byline.original}</p>
        <span className="page-article__auth">{articles.news_desk}:</span>
        <span className="page-article__auth"> {articles.section_name}</span> <br/>
        <a href={articles.web_url} target="_blank">Web resourse</a>
      </div>
  );
}

export default PageArticle;