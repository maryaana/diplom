import React from 'react';
import { ProjectCard } from '..';
import './ProjectsList.css';

const ProjectsList = (props) => {
  let projectsConfig = [
    {
      background: '#00C46B',
      row: 'span 6',
    },
    {
      background: '#05208B',
      row: 'span 8',
    },
    {
      background: '#FFD002',
      row: 'span 5',
    },
    {
      background: '#D4D9DC',
      row: 'span 7',
    },
    {
      background: '#1C2026',
      row: 'span 8',
    },
    {
      background: '#F02529',
      row: 'span 5',
    },
  ];

  return (
    <div className="projectCardsWrapper">
      {props.cases?.slice(0, 6).map((c, i) => (
        <ProjectCard
          title={c.name}
          link={''}
          background={projectsConfig[i].background}
          row={projectsConfig[i].row}
          photo={c.avatar}
          categories={c.tags.map((t) => t.tag)}
          key={i}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
