import React from 'react';
import { Accordeon, ContactLink, Form, HeaderBlock, Heading } from '../components';

const ServicesPage = (props) => {
  const ArrowSvg = () => (
    <svg width="6" height="14" viewBox="0 0 6 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0.246541L0.388693 0L5.18227 6.9912H5.19435L5.18831 7L5.19435 7.0088H5.18227L0.388693 14L0 13.7535L3.59955 7L0 0.246541Z"
        fill="#009FD7"
      />
    </svg>
  );

  return (
    <>
      <section className="sectionWrapper">
        <div className="headingMainPageWrapper">
          <Heading>
            <h1>
              Поможем бизнесу <span className="heading_active">заработать</span>
            </h1>
          </Heading>
        </div>
        <HeaderBlock
          subtitle={<span>Услуги</span>}
          description={
            <div>
              <div className="services__serviceWrapper">
                <h3 className="services__serviceName">Разработка</h3>
                <div className="services__serviceInner">
                  <div className="services__serviceContent">
                    <ArrowSvg />
                    <p className="services__serviceText">Сайты</p>
                  </div>
                  <div className="services__serviceContent">
                    <ArrowSvg />
                    <p className="services__serviceText">Сайты</p>
                  </div>
                  <div className="services__serviceContent">
                    <ArrowSvg />
                    <p className="services__serviceText">Сайты</p>
                  </div>
                  <div className="services__serviceContent">
                    <ArrowSvg />
                    <p className="services__serviceText">Сайты</p>
                  </div>
                  <div className="services__serviceContent">
                    <ArrowSvg />
                    <p className="services__serviceText">Сайты</p>
                  </div>
                </div>
              </div>

              <div className="services__serviceWrapper">
                <h3 className="services__serviceName">Маркетинг</h3>
                <div className="services__serviceInner">
                  <div className="services__serviceContent">
                    <ArrowSvg />
                    <p className="services__serviceText">Сайты</p>
                  </div>
                  <div className="services__serviceContent">
                    <ArrowSvg />
                    <p className="services__serviceText">Сайты</p>
                  </div>
                  <div className="services__serviceContent">
                    <ArrowSvg />
                    <p className="services__serviceText">Сайты</p>
                  </div>
                  <div className="services__serviceContent">
                    <ArrowSvg />
                    <p className="services__serviceText">Сайты</p>
                  </div>
                  <div className="services__serviceContent">
                    <ArrowSvg />
                    <p className="services__serviceText">Сайты</p>
                  </div>
                </div>
              </div>

              <div className="services__serviceWrapper">
                <h3 className="services__serviceName">Дизайн</h3>
                <div className="services__serviceInner">
                  <div className="services__serviceContent">
                    <ArrowSvg />
                    <p className="services__serviceText">Сайты</p>
                  </div>
                  <div className="services__serviceContent">
                    <ArrowSvg />
                    <p className="services__serviceText">Сайты</p>
                  </div>
                  <div className="services__serviceContent">
                    <ArrowSvg />
                    <p className="services__serviceText">Сайты</p>
                  </div>
                  <div className="services__serviceContent">
                    <ArrowSvg />
                    <p className="services__serviceText">Сайты</p>
                  </div>
                  <div className="services__serviceContent">
                    <ArrowSvg />
                    <p className="services__serviceText">Сайты</p>
                  </div>
                </div>
              </div>

              <div className="services__serviceWrapper">
                <h3 className="services__serviceName">Автоматизация</h3>
                <div className="services__serviceInner">
                  <div className="services__serviceContent">
                    <ArrowSvg />
                    <p className="services__serviceText">Сайты</p>
                  </div>
                  <div className="services__serviceContent">
                    <ArrowSvg />
                    <p className="services__serviceText">Сайты</p>
                  </div>
                  <div className="services__serviceContent">
                    <ArrowSvg />
                    <p className="services__serviceText">Сайты</p>
                  </div>
                  <div className="services__serviceContent">
                    <ArrowSvg />
                    <p className="services__serviceText">Сайты</p>
                  </div>
                  <div className="services__serviceContent">
                    <ArrowSvg />
                    <p className="services__serviceText">Сайты</p>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <img src="/about.png" className="about__image services__image" />
        <HeaderBlock
          subtitle={<span>lorem ipsum</span>}
          description={
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua
            </span>
          }
        />
      </section>
      <section className="services__background">
        <div className="services__backgroundContent">
          <div className="services__backgroundTitle">lorem ipsum</div>
          <div className="services__backgroundMain">
            <h2 className="services__backgroundHeading">Как мы работаем?</h2>
            <div className="services__backgroundBox">
              <p className="services__backgroundNumber">01</p>
              <p className="services__backgroundSubtitle">Бриф</p>
              <p className="services__backgroundText">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="services__backgroundBox">
              <p className="services__backgroundNumber">02</p>
              <p className="services__backgroundSubtitle">Составление ТЗ</p>
              <p className="services__backgroundText">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="services__backgroundBox">
              <p className="services__backgroundNumber">03</p>
              <p className="services__backgroundSubtitle">UX-прототип</p>
              <p className="services__backgroundText">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="services__backgroundBox">
              <p className="services__backgroundNumber">04</p>
              <p className="services__backgroundSubtitle">Дизайн</p>
              <p className="services__backgroundText">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="services__backgroundBox">
              <p className="services__backgroundNumber">05</p>
              <p className="services__backgroundSubtitle">Обсуждение и внесение правок</p>
              <p className="services__backgroundText">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="services__backgroundBox">
              <p className="services__backgroundNumber">06</p>
              <p className="services__backgroundSubtitle">Верстка</p>
              <p className="services__backgroundText">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="services__backgroundBox">
              <p className="services__backgroundNumber">07</p>
              <p className="services__backgroundSubtitle">Поддержка и продвижение</p>
              <p className="services__backgroundText">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sectionWrapper about__bottom">
        <HeaderBlock
          subtitle={<span>форма</span>}
          description={<span>Обсудим проект? Оставьте заявку и мы вам перезвоним</span>}
        />
        <Form casesTags={props.casesTags} id="form" onNewBid={props.onNewBid} />
      </section>
    </>
  );
};

export default ServicesPage;
