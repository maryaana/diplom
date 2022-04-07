import react from 'react';
import './Menu.css';
import logoDark from './../../assets/logo_dark.png';
import ContactInfo from '../ContactInfo/ContactInfo';
import arrows from './../../assets/arrows.svg';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  return (
    <div className="menuModal">
      <div className="menuContainer">
        <div className="menuLogoCloseWrapper">
          <div className="logoMenu">
            <Link to="/">
              <img src={logoDark} />
            </Link>
          </div>

          <div className="menuCloseButton" onClick={props.onClose}>
            <div className="menuLineRotateUp"></div>
            <div className="menuLineRotateDown"></div>
          </div>
        </div>

        <div className="flexMenuWrapper">
          <div className="flexMenuInner">
            <div className="linksMenuWrapper">
              <Link className="linkMenu" to="/" onClick={props.onClose}>
                Главная
              </Link>
              <Link className="linkMenu" to="/about" onClick={props.onClose}>
                Об агентстве
              </Link>
              <Link className="linkMenu" to="/services" onClick={props.onClose}>
                Услуги
              </Link>
              <Link className="linkMenu" to="/cases/all" onClick={props.onClose}>
                Кейсы
              </Link>
              <Link className="linkMenu" to="/news/all" onClick={props.onClose}>
                Блог
              </Link>
              <Link className="linkMenu" to="/#form" onClick={props.onClose}>
                Контакты
              </Link>
            </div>

            <div className="contactMenuWrapper">
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
        </div>
      </div>

      <div className="menuArrowsBackground">
        <img src={arrows} />
      </div>
    </div>
  );
};

export default Menu;
