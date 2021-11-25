import React, { useState, useEffect, useRef } from "react";
import ProjectsList from "./components/ProjectsList/ProjectsList";
import Header from "./components/Header/Header";
import Heading from "./components/Heading/Heading";
import HeaderBlock from "./components/HeaderBlock/HeaderBlock";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Form from "./components/Form/Form";
import Statistics from "./components/Statistics/Statistics";
import BlogCard from "./components/BlogCard/BlogCard";
import { CSSTransition } from "react-transition-group";

function App() {
  let [reviews, setReviews] = useState({});
  let [menu, setMenu] = useState(false);

  useEffect(async () => {
    let response = await fetch("/getReviews", { method: "GET" });
    response = await response.json();

    if (!response.success) {
      return;
    }

    setReviews({
      ...reviews,
      data: response.data,
    });
  }, []);

  function handleMenuLogic() {
    setMenu(!menu);
  }

  return (
    <>
      <div className="maxWidthWrapperHeader">
        <Header onMenuOpen={handleMenuLogic} />
      </div>
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
              <span>
                Работаем в разных областях: разработка, маркетинг, дизайн,
                автоматизация
              </span>
            }
          />
        </div>

        <div className="projectCardsWrapper">
          <ProjectCard
            title={"title"}
            background={"#00C46B"}
            row={"span 5"}
            photo={""}
            categories={["1", "2", "3"]}
          />

          <ProjectCard
            title={"title"}
            background={"#05208B"}
            row={"span 10"}
            photo={""}
            categories={["1", "2", "3"]}
          />

          <ProjectCard
            title={"title"}
            background={"#00C46B"}
            row={"span 8"}
            photo={""}
            categories={["1", "2", "3"]}
          />

          <ProjectCard
            title={"title"}
            background={"#05208B"}
            row={"span 4"}
            photo={""}
            categories={["1", "2", "3"]}
          />
        </div>

        <div className="subtitleWrapper">
          <HeaderBlock
            subtitle={<span>об агентстве</span>}
            description={
              <span>
                DGTL-squad — это it-продакшн полного цикла, с собственной
                аналитикой, дизайном, веб- и мобильной разработкой
              </span>
            }
          />
        </div>

        <div className="statisticsAppWrapper">
          <Statistics quantity={"топ 500"} description={"лучших агентств"} />
          <Statistics quantity={"5 лет"} description={"опыта работы"} />
          <Statistics quantity={"> 30"} description={"завершенных проектов"} />
        </div>

        <div className="subtitleBlogWrapper">
          <HeaderBlock
            subtitle={<span>блог</span>}
            description={<span>Анонсы и новости</span>}
          />
        </div>

        <div className="appFlexBlogWrapper">
          <BlogCard
            title={
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"
            }
            photo={""}
            categoty={"Автоматизация"}
            date={"23 ноября 2021"}
          />

          <BlogCard
            title={
              "Duis aute irure dolor in reprehenderit in voluptate"
            }
            photo={""}
            categoty={"Разработка"}
            date={"15 сентября 2021"}
          />

          <BlogCard
            title={
              "Lorem ipsum dolor sit amet"
            }
            photo={""}
            categoty={"Маркетинг"}
            date={"2 сентября 2021"}
          />
        </div>

        <div className="subtitleWrapper">
          <HeaderBlock
            subtitle={<span>форма</span>}
            description={
              <span>Обсудим проект? Оставьте заявку и мы вам перезвоним</span>
            }
          />
        </div>

        <Form />
      </section>
      <div className="backgroundFooter">
        <div className="maxWidthWrapper">
          <Footer />
        </div>
      </div>
      <CSSTransition
        in={menu}
        timeout={300}
        classNames="menuAppearence"
        unmountOnExit
      >
        <Menu onClose={handleMenuLogic} />
      </CSSTransition>
    </>
  );
}

export default App;
