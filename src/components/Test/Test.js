import React from 'react';
import './Test.css';

const Test = ({ reference }) => {
  return (
    <div>
      <div ref={reference}>click me</div>
    </div>
  );
};

export default Test;
