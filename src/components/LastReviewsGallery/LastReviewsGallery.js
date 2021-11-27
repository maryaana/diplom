import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./LastReviewsGallery.css";

const LastReviewsGallery = (props) => {
  let [index, setIndex] = useState(0);
  let reviews = props.reviews?.slice(0, 4);

  function handleNewIndex(sign) {
    return () => {
      switch (sign) {
        case "+": {
          if (index + 1 >= reviews?.length) return;
          setIndex(index + 1);
          return;
        }

        case "-": {
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
      <div className="moveRightReviews"></div>
        <section className="lastReviewsGalleryInner">
        <div className="lastReviewsGalleryDecor">“</div>
          <section className="lastReviewsGalleryInnerContent">
            {reviews?.map((r, i) => (
              <CSSTransition
                in={i === index}
                timeout={500}
                classNames="lastReviewsGalleryInnerContentAppearence"
                unmountOnExit
                key={i}
              >
                <div className="lastReviewsGalleryContentText">{r.text}</div>
              </CSSTransition>
            ))}
          </section>
          <section className="lastReviewsGalleryInnerControls">
            <div className="lastReviewsControlDisplaysWrapper">
              {reviews?.map((e, i) => (
                <div
                  key={i}
                  className={[
                    "lastReviewsControlDisplay",
                    index >= i && "lastReviewsControlDisplayActive",
                  ].join(" ")}
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
                onClick={handleNewIndex("-")}
              >
                <path
                  d="M7.875 1L2 7.27586M2 7.27586L8.29464 14M2 7.27586H49"
                  stroke={index <= 0 ? "#A0BFD7" : "#009FD7"}
                  strokeWidth="2"
                />
              </svg>

              <svg
                width="49"
                height="15"
                viewBox="0 0 49 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleNewIndex("+")}
              >
                <path
                  d="M41.125 1L47 7.27586M47 7.27586L40.7054 14M47 7.27586H0"
                  stroke={index >= reviews?.length - 1 ? "#A0BFD7" : "#009FD7"}
                  strokeWidth="2"
                />
              </svg>
            </div>
          </section>
        </section>
    </section>
  );
};

export default LastReviewsGallery;
