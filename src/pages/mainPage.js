import React from 'react';
import {
  HeaderBlock,
  Heading,
  ProjectCard,
  Statistics,
  WantToCollaborate,
  LastReviewsGallery,
  PartnersList,
  BlogCard,
  Form,
} from './../components';

const MainPage = (props) => {
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
    <>
      <section className="sectionWrapper">
        <div className="headingWrapper">
          <Heading>
            <h1>
              Агентство коммуникаций
              <span className="heading_active"> digital</span>-решений
            </h1>
          </Heading>
        </div>

        <div className="subtitleWrapper">
          <HeaderBlock
            subtitle={<span>наши проекты</span>}
            description={
              <span>Работаем в разных областях: разработка, маркетинг, дизайн, автоматизация</span>
            }
          />
        </div>

        <div className="projectCardsWrapper">
          {props.cases?.slice(0, 6).map((c, i) => (
            <ProjectCard
              link={''}
              title={c.name}
              background={projectsConfig[i].background}
              row={projectsConfig[i].row}
              photo={c.avatar}
              categories={c.tags.map((t) => t.tag)}
              key={i}
            />
          ))}
        </div>

        <div className="subtitleWrapper">
          <HeaderBlock
            subtitle={<span>об агентстве</span>}
            description={
              <span>
                DGTL-squad — это it-продакшн полного цикла, с собственной аналитикой, дизайном, веб-
                и мобильной разработкой
              </span>
            }
          />
        </div>

        <div className="statisticsAppWrapper">
          <Statistics quantity={'топ 500'} description={'лучших агентств'} />
          <Statistics quantity={'5 лет'} description={'опыта работы'} />
          <Statistics quantity={'> 30'} description={'завершенных проектов'} />
        </div>
      </section>

      <div className="backgroundDarkBlue">
        <div className="maxWidthWrapper">
          <WantToCollaborate />
        </div>
      </div>

      <section className="sectionWrapper">
        <PartnersList />
        <LastReviewsGallery reviews={props.reviews} />
        <div className="subtitleBlogWrapper">
          <HeaderBlock subtitle={<span>блог</span>} description={<span>Анонсы и новости</span>} />
        </div>

        <div className="appFlexBlogWrapper">
          {props.news?.map((n, i) => (
            <BlogCard
              key={i}
              link={''}
              title={n.name}
              photo={n.avatar}
              categoty={n.tag}
              date={n.creation_date}
            />
          ))}
        </div>

        <div className="subtitleWrapper">
          <HeaderBlock
            subtitle={<span>форма</span>}
            description={<span>Обсудим проект? Оставьте заявку и мы вам перезвоним</span>}
          />
        </div>

        <Form casesTags={props.casesTags} />
      </section>
    </>
  );
};

export default MainPage;
