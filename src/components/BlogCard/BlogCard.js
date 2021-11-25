import React from "react";
import "./BlogCard.css";

const BlogCard = (props) => {
  return (
    <>
      {
        <div className="blogCardContainer">
          <div className="photoBlogCard">
            <img src={props.photo} />
          </div>

          <div className="categoryDateBlogCardWrapper">
            <div className="categotyBlogCard">{props.categoty}</div>
            <div className="creationDateBlogCard">{props.date}</div>
          </div>
          <div className="titleBlogCard">{props.title}</div>
        </div>
      }
    </>
  );
};

export default BlogCard;
