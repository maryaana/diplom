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

const MainPage = () => {
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
          <ProjectCard
            title={'title'}
            background={'#00C46B'}
            row={'span 5'}
            photo={'0.png'}
            categories={['1', '2', '3']}
          />

          <ProjectCard
            title={'title'}
            background={'#05208B'}
            row={'span 10'}
            photo={'0.png'}
            categories={['1', '2', '3']}
          />

          <ProjectCard
            title={'title'}
            background={'#00C46B'}
            row={'span 8'}
            photo={'0.png'}
            categories={['1', '2', '3']}
          />

          <ProjectCard
            title={'title'}
            background={'#05208B'}
            row={'span 4'}
            photo={'0.png'}
            categories={['1', '2', '3']}
          />
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
        <LastReviewsGallery />
        <div className="subtitleBlogWrapper">
          <HeaderBlock subtitle={<span>блог</span>} description={<span>Анонсы и новости</span>} />
        </div>

        <div className="appFlexBlogWrapper">
          <BlogCard
            title={'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'}
            photo={''}
            categoty={'Автоматизация'}
            date={'23 ноября 2021'}
          />

          <BlogCard
            title={'Duis aute irure dolor in reprehenderit in voluptate'}
            photo={''}
            categoty={'Разработка'}
            date={'15 сентября 2021'}
          />

          <BlogCard
            title={'Lorem ipsum dolor sit amet'}
            photo={''}
            categoty={'Маркетинг'}
            date={'2 сентября 2021'}
          />
        </div>

        <div className="subtitleWrapper">
          <HeaderBlock
            subtitle={<span>форма</span>}
            description={<span>Обсудим проект? Оставьте заявку и мы вам перезвоним</span>}
          />
        </div>

        <Form />
      </section>
    </>
  );
};

export default MainPage;
