import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = (props) => {
  const base = '/projects/';
  function categoriesList() {
    return props.categories.map((category, i) => (
      <div key={i} className="categoriesProjectCard">
        {category}
      </div>
    ));
  }

  return (
    <>
      {
        <div
          className="projectCardContainer"
          style={{ gridRow: 1 + +props.row.replace(/span/, '') + ' span' }}
        >
          <Link to={props.link} className="projectCardContainerLink">
            <div
              className="backgroundProjectCard"
              style={{
                background: props.background,
              }}
            >
              <div className="photoProjectCard">
                <img src={`${base}${props.photo}`} />
              </div>
            </div>

            <div className="titleProjectCard">{props.title}</div>

            <div className="categoriesProjectCardWrapper">{categoriesList()}</div>
          </Link>
        </div>
      }
    </>
  );
};

export default ProjectCard;
