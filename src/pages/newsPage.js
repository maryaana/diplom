import React from 'react';
import { HeaderBlock } from '../components';

const newsPage = (props) => {
  let data = null;
  if (props.data) data = props.data[0];

  if (!data) return null;

  return (
    <div className="casePage__wrapper">
      <h1 className="casesPage__heading">{data?.name}</h1>
      <div className="newsPage__meta">
        <p className="newsPage__tag">{data?.tag}</p>
        <p className="newsPage__date">{data?.creation_date}</p>
      </div>
      <p className="newsPage__text">{data?.description}</p>
      <img src={`/news/${data?.avatar}`} className="newsPage__image" />
    </div>
  );
};

export default newsPage;
