import React from "react";
import "./ProjectCard.css";

const ProjectCard = (props) => {
    const categories = props.categories;

    return (
        <>
          {
            <div className="contactInfoWrapper">
              <div className="subtitleContact">{props.subtitle}</div>
              <a className="contactLink" href={props.link}>{props.contact}</a>
            </div>
          }
        </>
      );
      
//   function mapCategories(elem, index) {
//     return <div key={index}>{elem.text}</div>;
//   }
//   return <div>{props.projects.map(mapReviews)}</div>;
};

export default ProjectCard;