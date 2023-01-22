import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Row, Col } from "reactstrap";
import './ArticleComponent.css'; 
var moment = require("moment");

const Blog = () => {
  const [mediumData, setMediumData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@pdulepet`)
      .then(res => res.json())
      .then(response => {
        setMediumData(response.items);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  const finalData = mediumData.slice(0, 15);

  return (
    <Carousel>
        {finalData.map(article => (
            <div className="grid-item" key={article}>
                <div className="article">
                <a href={article.link} target="_blank">
                <img className="card" src={article.thumbnail} alt="img" />
                </a>
                <CardBody>
                    <CardTitle>
                    <h3>{article.title}</h3>
                    </CardTitle>
                    <p>
                    <strong>Published:{" "}</strong>
                    {moment(article.pubDate).format("MMMM Do, YYYY")}
                    </p>
                </CardBody>
                </div>
            </div>
        ))}
    </Carousel>
  );
};

export default Blog;