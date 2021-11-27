import React from 'react';
import { Link } from 'react-router-dom';
import './SelectableTagsDisplay.css';

const SelectableTagsDisplay = (props) => {
  return (
    <section className="SelectableTagsWrapper">
      <Link to={`${props.base}all`}>
        <div
          className={['selectableTag', props.target === 'all' && 'SelectableTagActive'].join(' ')}
        >
          Все ({props.content?.length})
        </div>
      </Link>
      {props.tags?.map((t, i) => (
        <Link to={`${props.base}${t.tag.replace(/\//, '-')}`}>
          <div
            className={[
              'selectableTag',
              props.target === t.tag.replace(/\//, '-') && 'SelectableTagActive',
            ].join(' ')}
          >
            {t.tag} (
            {props.type === 'cases'
              ? props.content?.filter((c) => c.tags?.filter((ta) => t.tag === ta.tag).length > 0)
                  .length
              : props.content?.filter((c) => c.tag.replace(/\//, '-') === t.tag).length}
            )
          </div>
        </Link>
      ))}
    </section>
  );
};

export default SelectableTagsDisplay;
