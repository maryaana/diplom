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
      let data = appData.data?.news.data;
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

  const handleElemCreation = (category, body, id) => {
    alert('here');
    if (category === 'cases') {
      let newData = [...appData.data?.cases.data];
      let tags = appData.data?.casesTags.data;
      let mappedTags = body.categories.split(',').map((cat) => tags.find((t) => +t.id === +cat));

      newData.push({
        id,
        avatar: `${id}.png`,
        description: body.description,
        link: body.moreInfo,
        name: body.name,
        tags: mappedTags,
      });

      setAppData({
        ...appData,
        data: {
          ...appData.data,
          cases: {
            ...appData.data.cases,
            data: newData,
          },
        },
      });
    }

    if (category === 'news') {
      let newData = [...appData.data?.news.data];
      let tags = appData.data?.newsTags.data;
      let mappedTags = `${body.categories}`
        .split(',')
        .map((cat) => tags.find((t) => +t.id === +cat));

      newData.push({
        id,
        avatar: `${id}.png`,
        description: body.description,
        creation_date: body.moreInfo,
        name: body.name,
        newsTags_id: mappedTags[0].id,
        tag: mappedTags[0].tag,
      });

      setAppData({
        ...appData,
        data: {
          ...appData.data,
          news: {
            ...appData.data.news,
            data: newData,
          },
        },
      });
    }
  };

  const handleElemEdition = (category, body, id, name) => {
    if (category === 'cases') {
      let newData = [...appData.data?.cases.data];

      let tags = appData.data?.casesTags.data;

      let mappedTags = body.categories.split(',').map((cat) => tags.find((t) => +t.id === +cat));

      newData = newData.filter((d) => +d.id !== +id);

      newData.push({
        id,
        avatar: name,
        description: body.description,
        link: body.moreInfo ?? body.link,
        name: body.name,
        tags: mappedTags,
      });

      setAppData({
        ...appData,
        isLoading: false,
        data: {
          ...appData.data,
          cases: {
            ...appData.data.cases,
            data: newData.sort((a, b) => a.id - b.id),
          },
        },
      });
    }

    if (category === 'news') {
      let newData = [...appData.data?.news.data];
      let tags = appData.data?.newsTags.data;
      let mappedTags = `${body.categories}`
        .split(',')
        .map((cat) => tags.find((t) => +t.id === +cat));

      newData = newData.filter((d) => +d.id !== +id);

      newData.push({
        id,
        avatar: name,
        description: body.description,
        creation_date: body.moreInfo ?? body.creation_date,
        name: body.name,
        newsTags_id: mappedTags[0].id,
        tag: mappedTags[0].tag,
      });

      setAppData({
        ...appData,
        data: {
          ...appData.data,
          news: {
            ...appData.data.news,
            data: newData.sort((a, b) => a.id - b.id),
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
              casesTags={appData.data?.casesTags.data}
              newsTags={appData.data?.newsTags.data}
              onElemDeleted={handleElemDeletion}
              onElemCreated={handleElemCreation}
              onElemEdited={handleElemEdition}
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
