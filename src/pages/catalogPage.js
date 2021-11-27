import React from 'react';
import { ContentSelectableArea, Heading } from '../components';

const catalogPage = (props) => {
  return (
    <section className="sectionWrapper casesPageTopPadding">
      <Heading>
        <h1>{props.heading}</h1>
      </Heading>

      <ContentSelectableArea
        type={props.type}
        content={props.content}
        tags={props.tags}
        base={props.base}
        contentMount={props.contentMount}
      />
    </section>
  );
};

export default catalogPage;
