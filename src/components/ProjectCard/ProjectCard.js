import React from "react";
import "./ProjectCard.css";

const ProjectCard = (props) => {

  function categoriesList() {
    return props.categories.map((category, i) => <div key={i} className="categoriesProjectCard">{category}</div>);
  };

    return (
        <>
          {
            <div className="projectCardContainer">

              <div className="backgroundProjectCard" style={{background: props.background, height: props.height}}></div>

              <div className="titleProjectCard">{props.title}</div>

              <div className="photoProjectCard"><img src={props.photo}/></div>
              
              <div className="categoriesProjectCardWrapper">{categoriesList()}</div>

            </div>
          }
        </>
      );
};

export default ProjectCard;