import React, { useState, useEffect } from 'react';
import './App.css';
import { CSSTransition } from 'react-transition-group';
import { Header, Footer, Menu, Preloader } from './components';
import { Routes, Route } from 'react-router-dom';
import { CatalogPage, MainPage } from './pages';
import * as Utils from './Utils';

function App() {
  let [appData, setAppData] = useState({
    isLoading: true,
  });

  useEffect(async () => {
    let data = await Utils.AppManager.fetchEverything();
    setAppData({
      ...appData,
      isLoading: false,
      data,
    });
  }, []);

  let [menu, setMenu] = useState(false);

  function handleMenuLogic() {
    setMenu(!menu);
  }

  return (
    <>
      <Preloader isLoading={appData.isLoading} />

      <Header onMenuOpen={handleMenuLogic} />

      <Routes>
        <Route
          path="/cases/:tag/"
          element={
            <CatalogPage
              type={'cases'}
              base={'/cases/'}
              contentMount={'info/'}
              heading={'Кейсы'}
              content={appData.data?.cases.data}
              tags={appData.data?.casesTags.data}
            />
          }
        />
        <Route path="/cases/info/:id/" element={<div>Здарова</div>} />

        {/* <Route
          path="/news/:tag/"
          element={
            <CatalogPage
              type={'news'}
              base={'/news/'}
              contentMount={'info/'}
              heading={'Новости'}
              content={appData.data?.news.data}
              tags={appData.data?.newsTags.data}
            />
          }
        />
        <Route path="/news/info/:id/" element={<div>Здарова</div>} /> */}

        <Route
          path="/"
          element={
            <MainPage
              cases={appData.data?.cases.data}
              news={appData.data?.news.data}
              reviews={appData.data?.reviews.data}
              casesTags={appData.data?.casesTags.data}
            />
          }
        />
      </Routes>

      <Footer />

      <CSSTransition in={menu} timeout={300} classNames="menuAppearence" unmountOnExit>
        <Menu onClose={handleMenuLogic} />
      </CSSTransition>
    </>
  );
}

export default App;
