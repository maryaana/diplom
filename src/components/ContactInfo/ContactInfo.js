import react from "react";
import "./ContactInfo.css";

function ContactInfo(props) {
  return (
    <>
      {
        <div className="contactInfoWrapper">
          <div className="subtitleContact">{props.subtitle}</div>
          <a className="contactLink" href={props.link}>{props.contact}</a>
        </div>
      }
    </>
  );
}

export default ContactInfo;