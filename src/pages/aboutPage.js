import React from 'react';
import { Accordeon, ContactLink, HeaderBlock, Heading } from '../components';

const AboutPage = (props) => {
  if (!props.cases) return null;

  const lastProject = props.cases.pop();

  return (
    <>
      <section className="sectionWrapper">
        <div className="headingMainPageWrapper">
          <Heading>
            <h1>
              Мы -<span className="heading_active">Digital Squad</span>
            </h1>
          </Heading>
        </div>
        <div className="about__textWrapper">
          <p className="about__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud{' '}
          </p>
        </div>
        <img src="/about.png" className="about__image" />
        <HeaderBlock
          subtitle={<span>Что нового</span>}
          description={<span>Последний проект</span>}
        />
        <div className="about__projectWrapper">
          <img src={'/projects/' + lastProject.avatar} className="about__projectImage" />
          <p className="about__projectName">{lastProject.name}</p>
          <div className="about__projectTags">
            {lastProject.tags.map((tag) => (
              <p className="about__projectTag">{tag.tag}</p>
            ))}
          </div>
        </div>
      </section>
      <ContactLink />
      <section className="sectionWrapper about__bottom">
        <HeaderBlock subtitle={<span>FAQ</span>} description={<span>Частые вопросы</span>} />
        <div className="about__accordeon">
          <Accordeon heading={'test'} text={'test test test test test'} />
          <Accordeon heading={'test'} text={'test test test test test'} />
          <Accordeon heading={'test'} text={'test test test test test'} />
          <Accordeon heading={'test'} text={'test test test test test'} />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
