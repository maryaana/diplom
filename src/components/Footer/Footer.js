import react from 'react';
import './Footer.css';
import ContactInfo from '../ContactInfo/ContactInfo';
import logoDark from './../../assets/logo_dark.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="maxWidthFooterWrapper">
        <div className="flexFooterWrapper">
          <div className="logoFooter">
            <Link to="/">
              <img src={logoDark} />
            </Link>
          </div>

          <div className="linksWrapper">
            <Link className="linkFooter" to="/">
              Главная
            </Link>
            <Link className="linkFooter" to="/about">
              Об агентстве
            </Link>
            <Link className="linkFooter" to="/services">
              Услуги
            </Link>
            <Link className="linkFooter" to="/cases/all">
              Кейсы
            </Link>
            <Link className="linkFooter" to="/news/all">
              Блог
            </Link>
            <Link className="linkFooter" to="/#form">
              Контакты
            </Link>
          </div>

          <div className="contactFooterWrapper">
            <ContactInfo
              subtitle={<span>почта</span>}
              link={'#'}
              contact={<span>info@digitalsquad.ru</span>}
            />

            <ContactInfo
              subtitle={<span>телефон</span>}
              link={'#'}
              contact={<span>8 800 123 45 67</span>}
            />

            <ContactInfo
              subtitle={<span>instagram</span>}
              link={'#'}
              contact={<span>@dgtlsquad</span>}
            />
          </div>
        </div>

        <div className="privacyWrapper">
          <p className="copyright">Digital squad, 2021</p>
          <a className="linkPrivacy" href="#">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
