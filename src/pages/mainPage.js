import React from 'react';
import {
  HeaderBlock,
  Heading,
  ProjectsList,
  Statistic,
  ContactLink,
  LastReviewsGallery,
  PartnersList,
  Form,
  BlogCardsList,
} from './../components';

const MainPage = (props) => {
  return (
    <>
      <section className="sectionWrapper">
        <div className="headingMainPageWrapper">
          <Heading>
            <h1>
              Агентство коммуникаций
              <span className="heading_active"> digital</span>-решений
            </h1>
          </Heading>
        </div>

        <HeaderBlock
          subtitle={<span>наши проекты</span>}
          description={
            <span>Работаем в разных областях: разработка, маркетинг, дизайн, автоматизация</span>
          }
        />

        <ProjectsList cases={props.cases} />

        <HeaderBlock
          subtitle={<span>об агентстве</span>}
          description={
            <span>
              DGTL-squad — это it-продакшн полного цикла, с собственной аналитикой, дизайном, веб- и
              мобильной разработкой
            </span>
          }
        />

        <div className="statisticMainPageWrapper">
          <Statistic quantity={'топ 500'} description={'лучших агентств'} />
          <Statistic quantity={'5 лет'} description={'опыта работы'} />
          <Statistic quantity={'> 30'} description={'завершенных проектов'} />
        </div>
      </section>

      <ContactLink />

      <section className="sectionWrapper">
        <PartnersList />

        <HeaderBlock
          subtitle={<span>отзывы</span>}
          description={<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>}
        />

        <LastReviewsGallery reviews={props.reviews} />

        <div className="subtitleMainPageBlogWrapper">
          <HeaderBlock subtitle={<span>блог</span>} description={<span>Анонсы и новости</span>} />
        </div>

        <BlogCardsList news={props.news} />

        <HeaderBlock
          subtitle={<span>форма</span>}
          description={<span>Обсудим проект? Оставьте заявку и мы вам перезвоним</span>}
        />
        <Form casesTags={props.casesTags} />
      </section>
    </>
  );
};

export default MainPage;
