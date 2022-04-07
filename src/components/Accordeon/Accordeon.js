import { useState } from 'react';
import './Accordeon.css';

export const Accordeon = ({ heading, text }) => {
  const [opened, setOpened] = useState(false);

  return (
    <div
      className={`accordeon__wrapper ${opened && 'accordeon__wrapper_opened'}`}
      onClick={() => setOpened(!opened)}
    >
      <h5 className="accordeon__heading">{heading}</h5>
      <p className="accordeon__text">{text}</p>
      {opened ? (
        <svg
          width="38"
          height="2"
          viewBox="0 0 38 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="accordeon__icon"
        >
          <rect width="38" height="2" fill="#009FD7" />
        </svg>
      ) : (
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="accordeon__icon"
        >
          <rect x="20" width="38" height="2" transform="rotate(90 20 0)" fill="#A0BFD7" />
          <rect y="18" width="38" height="2" fill="#A0BFD7" />
        </svg>
      )}
    </div>
  );
};
