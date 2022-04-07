import react from 'react';
import './ContactLink.css';
import ContactInfo from '../ContactInfo/ContactInfo';
import arrows from './../../assets/arrows.svg';
import { Link } from 'react-router-dom';

const ContactLink = () => {
  return (
    <div className="contactLinkConatainer">
      <div className="contactLinkMaxWidthWrapper">
        <div className="contactLinkHeadingWrapper">
          <p className="contactLinkHeading">Хотите посотрудничать?</p>
          <Link className="contactLinkLink" to="/#form">
            Связаться с нами.
          </Link>
        </div>

        <div className="contactLinkContactInfoWrapper">
          <div className="contactLinkContactContainer">
            <ContactInfo
              subtitle={<span>почта</span>}
              link={'#'}
              contact={<span>info@digitalsquad.ru</span>}
            />
          </div>
          <div className="contactLinkContactContainer">
            <ContactInfo
              subtitle={<span>телефон</span>}
              link={'#'}
              contact={<span>8 800 123 45 67</span>}
            />
          </div>
          <div className="contactLinkContactContainer">
            <ContactInfo
              subtitle={<span>instagram</span>}
              link={'#'}
              contact={<span>@dgtlsquad</span>}
            />
          </div>
        </div>

        <div className="contactLinkArrowsBackground">
          <img src={arrows} />
        </div>
      </div>
    </div>
  );
};

export default ContactLink;
