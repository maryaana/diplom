import React from 'react';
import './PartnersList.css';
import * as partnersLogos from './../../assets/partners/index';

const PartnersList = () => {
  const partners = Object.values(partnersLogos);

  return (
    <div className="partnersWrapper">
      {partners.map((p, i) => (
        <img src={p} key={`partner-${i}`} />
      ))}
    </div>
  );
};

export default PartnersList;
