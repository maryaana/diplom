import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Preloader.css';

const Preloader = (props) => {
  return (
    <CSSTransition
      in={props.isLoading}
      timeout={500}
      classNames="preloaderAppearence"
      unmountOnExit
    >
      <section className="preloaderWrapper">This is Preloader</section>
    </CSSTransition>
  );
};

export default Preloader;
