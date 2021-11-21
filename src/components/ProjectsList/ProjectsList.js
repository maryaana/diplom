import React from "react";

const ProjectsList = (props) => {
  function mapReviews(elem, index) {
    return <div key={index}>{elem.text}</div>;
  }
  return <div>{props.projects.map(mapReviews)}</div>;
};

export default ProjectsList;
