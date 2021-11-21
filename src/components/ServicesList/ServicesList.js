import react from "react";
import Service from "./Service";
import "./ServicesList.css";

function ServicesList() {
  return (
    <>
      {
        <div className="serviceListWrapper">
          <Service name={'Разработка'}>
            <ul className="serviceContent">
              <li>Сайты</li>
              <li>Лендинги</li>
              <li>Приложения</li>
              <li>Сайты</li>
              <li>Сайты</li>
              <li>Сайты</li>
              <li>Сайты</li>
              <li>Сайты</li>
            </ul>
          </Service>
          <Service name='Разработка'>
            <ul className="serviceContent">
              <li>Сайты</li>
              <li>Лендинги</li>
              <li>Приложения</li>
              <li>Сайты</li>
            </ul>
          </Service>
          <Service name='Разработка'>
            <ul className="serviceContent">
              <li>Сайты</li>
              <li>Лендинги</li>
              <li>Приложения</li>
              <li>Сайты</li>
              <li>Сайты</li>
              <li>Сайты</li>
              <li>Сайты</li>
              <li>Сайты</li>
            </ul>
          </Service>
        </div>
      }
    </>
  );
}

export default ServicesList;
