import react from 'react';
import './HeaderBlock.css';

function HeaderBlock(props) {
  return (
    <>
      {
        <div className="headerBlockWrapper">
          <div className="subtitle">{props.subtitle}</div>
          <div className="headerBlockDescription">{props.description}</div>
        </div>
      }
    </>
  );
}

export default HeaderBlock;
