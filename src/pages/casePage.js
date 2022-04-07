import React from 'react';
import { HeaderBlock } from '../components';

const casePage = (props) => {
  let data = null;
  if (props.data) data = props.data[0];

  if (!data) return null;

  return (
    <div className="casePage__wrapper">
      <h1 className="casesPage__heading">{data.name}</h1>
      <div className="casesPage__meta">
        <p className="casesPage__link">{data.link}</p>
        <div className="casesPage__tags">
          {data.tags.map((tag) => (
            <div className="casesPage__tag">{tag.tag}</div>
          ))}
        </div>
      </div>
      <img src={`/projects/${data.avatar}`} className="casesPage__image" />
      <HeaderBlock
        subtitle={<span>описание проекта</span>}
        description={<span>{data.description}</span>}
      />
    </div>
  );
};

export default casePage;
