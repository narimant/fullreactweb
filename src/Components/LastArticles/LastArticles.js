import React, { useEffect, useState } from "react";
import ArticleBox from "../ArticleBox/ArticleBox";
import SectionHeader from "./../SectionHeader/SectionHeader";

import "./LastArticles.css";

export default function LastArticles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:4000/v1/articles`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);
  return (
    <section className="articles">
      <div className="container">
        <SectionHeader
          title="جدیدترین مقاله ها"
          desc="پیش به سوی ارتقای دانش"
          btnTitle="تمامی مقاله ها"
          btnHref='articles/1'
        />

        <div className="articles__content">
          <div className="row">
            {articles.map((article,index) => (
              <ArticleBox key={index} {...article}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
