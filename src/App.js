import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { CSSTransition } from 'react-transition-group';
import { Header, Footer, Menu } from './components';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages';

function App() {
  let [reviews, setReviews] = useState({});

  useEffect(async () => {
    let response = await fetch('/getReviews', { method: 'GET' });
    response = await response.json();

    if (!response.success) {
      return;
    }

    setReviews({
      ...reviews,
      data: response.data,
    });
  }, []);

  let [menu, setMenu] = useState(false);

  function handleMenuLogic() {
    setMenu(!menu);
  }

  return (
    <>
      <div className="maxWidthWrapperHeader">
        <Header onMenuOpen={handleMenuLogic} />
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>

      <div className="backgroundDarkBlue">
        <div className="maxWidthWrapper">
          <Footer />
        </div>
      </div>
      <CSSTransition in={menu} timeout={300} classNames="menuAppearence" unmountOnExit>
        <Menu onClose={handleMenuLogic} />
      </CSSTransition>
    </>
  );
}

export default App;
