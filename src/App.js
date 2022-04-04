import React, { useState, useEffect } from 'react';
import './App.css';
import { CSSTransition } from 'react-transition-group';
import { Header, Footer, Menu, Preloader } from './components';
import { Routes, Route } from 'react-router-dom';
import { CasePage, CatalogPage, MainPage } from './pages';
import * as Utils from './Utils';
import { WithDataRendering } from './HOC';
import AdminPanel from './components/AdminPanel/AdminPanel';

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

  const handleElemDeletion = (category, id) => {
    if (category === 'cases') {
      let data = appData.data?.cases.data;
      data = data.filter((elem) => elem.id !== id);
      console.log(data, appData);
      setAppData({
        ...appData,
        data: {
          ...appData.data,
          cases: {
            ...appData.data.cases,
            data,
          },
        },
      });
    }

    if (category === 'news') {
      let data = appData.data?.cases.news;
      data = data.filter((elem) => elem.id !== id);
      setAppData({
        ...appData,
        data: {
          ...appData.data,
          news: {
            ...appData.data.news,
            data,
          },
        },
      });
    }

    if (category === 'bids') {
      let data = appData.data?.bids.data;
      data = data.filter((elem) => elem.id !== id);
      setAppData({
        ...appData,
        data: {
          ...appData.data,
          bids: {
            ...appData.data.bids,
            data,
          },
        },
      });
    }
  };

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
        <Route
          path="/cases/info/:id"
          element={WithDataRendering(CasePage, appData.data?.cases.data, 'cases/info/:id')}
        />

        <Route
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
        <Route path="/news/info/:id" element={<div>Здарова</div>} />

        <Route
          path="/admin"
          element={
            <AdminPanel
              cases={appData.data?.cases.data}
              news={appData.data?.news.data}
              bids={appData.data?.bids.data}
              onElemDeleted={handleElemDeletion}
            />
          }
        />

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
