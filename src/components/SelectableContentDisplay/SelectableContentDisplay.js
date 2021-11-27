import React from 'react';
import { Link } from 'react-router-dom';
import { BlogCard, ProjectCard } from '..';
import './SelectableContentDisplay.css';

const SelectableContentDisplay = (props) => {
  let colors = ['#00C46B', '#05208B', '#FFD002', '#D4D9DC', '#1C2026', '#F02529'];
  let rows = ['span 7', 'span 8', 'span 9'];

  function assertRandom(type) {
    switch (type) {
      case 'color':
        return Math.floor(Math.random() * colors.length);
      case 'row':
        return Math.floor(Math.random() * rows.length);
    }
  }

  return (
    <section>
      {props.type === 'cases' ? (
        <div className="projectCardsWrapper">
          {props.content
            ?.filter(
              (c) =>
                c.tags.filter(
                  (t) => props.target === 'all' || t.tag.replace(/\//, '-') === props.target
                ).length > 0
            )
            .map((c, i) => (
              <ProjectCard
                title={c.name}
                link={`${props.base}${props.contentMount}${c.id}`}
                background={colors[assertRandom('color')]}
                row={rows[assertRandom('row')]}
                photo={c.avatar}
                categories={c.tags.map((t) => t.tag)}
              />
            ))}
        </div>
      ) : (
        <div className="newsWrapper">
          {props.content
            ?.filter((c) => props.target === 'all' || c.tag.replace(/\//, '-') === props.target)
            .map((c, i) => (
              <BlogCard
                key={i}
                link={`${props.base}${props.contentMount}${c.id}`}
                title={c.name}
                photo={c.avatar}
                categoty={c.tag}
                date={c.creation_date}
              />
            ))}
        </div>
      )}
    </section>
  );
};

export default SelectableContentDisplay;
