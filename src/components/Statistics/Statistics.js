import react from "react";
import "./Statistics.css";

function Statistics(props) {
  return (
    <>
      {
        <div className="statisticsWrapper">
          <div className="statisticsQuantity">{props.quantity}</div>
          <div className="statisticsDescription">{props.description}</div>
        </div>
      }
    </>
  );
}

export default Statistics;
