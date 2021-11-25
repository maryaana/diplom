import react from "react";
import "./WantToCollaborate.css";
import ContactInfo from "../ContactInfo/ContactInfo";
import arrows from "./../../assets/arrows.svg";

const WantToCollaborate = () => {
  return (
    <div className="wantToCollaborateConatainer">
      <div className="wantToCollaborateHeadingWrapper">
        <p className="wantToCollaborateHeading">Хотите посотрудничать?</p>
        <a className="wantToCollaborateLink" href="#">
          Связаться с нами.
        </a>
      </div>

      <div className="wantToCollaborateContactInfoWrapper">
        <div className="wantToCollaborateContactContainer">
          <ContactInfo
            subtitle={<span>почта</span>}
            link={"#"}
            contact={<span>info@digitalsquad.ru</span>}
          />
        </div>
        <div className="wantToCollaborateContactContainer">
          <ContactInfo
            subtitle={<span>телефон</span>}
            link={"#"}
            contact={<span>8 800 123 45 67</span>}
          />
        </div>
        <div className="wantToCollaborateContactContainer">
          <ContactInfo
            subtitle={<span>instagram</span>}
            link={"#"}
            contact={<span>@dgtlsquad</span>}
          />
        </div>
      </div>

      <div className="wantToCollaborateArrowsBackground">
        <img src={arrows} />
      </div>

    </div>
  );
};

export default WantToCollaborate;
