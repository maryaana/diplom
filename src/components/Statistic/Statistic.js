import react from "react";
import "./Statistic.css";

function Statistic(props) {
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

export default Statistic;
