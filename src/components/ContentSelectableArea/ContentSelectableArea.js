import React from 'react';
import { useParams } from 'react-router-dom';
import { SelectableContentDisplay, SelectableTagsDisplay } from '..';
import './ContentSelectableArea.css';

const ContentSelectableArea = (props) => {
  const params = useParams();

  return (
    <section>
      <SelectableTagsDisplay
        type={props.type}
        content={props.content}
        tags={props.tags}
        target={params.tag}
        base={props.base}
      />
      <SelectableContentDisplay
        type={props.type}
        base={props.base}
        content={props.content}
        contentMount={props.contentMount}
        target={params.tag}
      />
    </section>
  );
};

export default ContentSelectableArea;
