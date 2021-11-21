import react from "react";
import "./ServicesList.css";

function Service(props) {
  return (
    <>
      {
        <div className="serviceWrapper">
          <h3>{props.name}</h3>
          {props.children}
        </div>
      }
    </>
  );
}

export default Service;
