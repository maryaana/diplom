import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './LastReviewsGallery.css';

const LastReviewsGallery = () => {
  let [reviews, setReviews] = useState([
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    'ure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    'Биба и боба 2 долболба',
  ]);

  let [index, setIndex] = useState(0);

  function handleNewIndex(sign) {
    return () => {
      switch (sign) {
        case '+': {
          if (index + 1 >= reviews.length) return;
          setIndex(index + 1);
          return;
        }

        case '-': {
          if (index === 0) return;
          setIndex(index - 1);
          return;
        }
      }
    };
  }

  function handleDirectIndex(i) {
    setIndex(i);
  }

  return (
    <section className="lastReviewsGalleryWrapper">
      <section className="lastReviewsGalleryInner">
        <section className="lastReviewsGalleryInnerContent">
          {reviews.map((r, i) => (
            <CSSTransition
              in={i === index}
              timeout={500}
              classNames="lastReviewsGalleryInnerContentAppearence"
              unmountOnExit
            >
              <div>{r}</div>
            </CSSTransition>
          ))}
        </section>
        <section className="lastReviewsGalleryInnerControls">
          <div className="lastReviewsControlDisplaysWrapper">
            {reviews.map((e, i) => (
              <div
                key={i}
                className={[
                  'lastReviewsControlDisplay',
                  index >= i && 'lastReviewsControlDisplayActive',
                ].join(' ')}
                onClick={() => handleDirectIndex(i)}
              ></div>
            ))}
          </div>
          <div className="lastReviewsControlArrowsWrapper">
            <svg
              width="49"
              height="15"
              viewBox="0 0 49 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleNewIndex('-')}
            >
              <path
                d="M7.875 1L2 7.27586M2 7.27586L8.29464 14M2 7.27586H49"
                stroke={index <= 0 ? '#A0BFD7' : '#009FD7'}
                stroke-width="2"
              />
            </svg>

            <svg
              width="49"
              height="15"
              viewBox="0 0 49 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleNewIndex('+')}
            >
              <path
                d="M41.125 1L47 7.27586M47 7.27586L40.7054 14M47 7.27586H0"
                stroke={index >= reviews.length - 1 ? '#A0BFD7' : '#009FD7'}
                stroke-width="2"
              />
            </svg>
          </div>
        </section>
      </section>
    </section>
  );
};

export default LastReviewsGallery;
