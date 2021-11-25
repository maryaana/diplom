import react from "react";
import "./Menu.css";
import logoDark from "./../../assets/logo_dark.png";
import ContactInfo from "../ContactInfo/ContactInfo";
import arrows from "./../../assets/arrows.svg";

const Menu = (props) => {
  return (
    <div className="menuModal">
      <div className="menuContainer">
        <div className="menuLogoCloseWrapper">
          <div className="logoMenu">
            <img src={logoDark} />
          </div>

          <div className="menuCloseButton" onClick={props.onClose}>
            <div className="menuLineRotateUp"></div>
            <div className="menuLineRotateDown"></div>
          </div>
        </div>

        <div className="flexMenuWrapper">
          <div className="flexMenuInner">
            <div className="linksMenuWrapper">
              <a className="linkMenu" href="#">
                Главная
              </a>
              <a className="linkMenu" href="#">
                Об агентстве
              </a>
              <a className="linkMenu" href="#">
                Услуги
              </a>
              <a className="linkMenu" href="#">
                Кейсы
              </a>
              <a className="linkMenu" href="#">
                Блог
              </a>
              <a className="linkMenu" href="#">
                Контакты
              </a>
            </div>

            <div className="contactMenuWrapper">
              <ContactInfo
                subtitle={<span>почта</span>}
                link={"#"}
                contact={<span>info@digitalsquad.ru</span>}
              />

              <ContactInfo
                subtitle={<span>телефон</span>}
                link={"#"}
                contact={<span>8 800 123 45 67</span>}
              />

              <ContactInfo
                subtitle={<span>instagram</span>}
                link={"#"}
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
