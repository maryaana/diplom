import React from 'react';
import './BlogCardsList.css';
import { BlogCard } from '..';

const BlogCardsList = (props) => {
  return (
    <div className="blogCardsListWrapper">
      {props.news?.map((n, i) => (
        <BlogCard
          key={i}
          link={`/news/info/${n.id}`}
          title={n.name}
          photo={n.avatar}
          categoty={n.tag}
          date={n.creation_date}
        />
      ))}
    </div>
  );
};

export default BlogCardsList;
