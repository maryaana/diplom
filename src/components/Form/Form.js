import react from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="formWrapper">
      <div className="moveRight"></div>
      <div className="inputWrapper">
        <input className="inputText" placeholder="Имя*"></input>
        <input className="inputText" placeholder="Телефон*"></input>
        
        <select className="inputSelect">
          <option value="0">Какие услуги вас интересуют?</option>
          <option value="1">Web</option>
          <option value="2">Mobile</option>
          <option value="3">UI/UX</option>
          <option value="4">Маркетинг</option>
          <option value="5">Автоматизация</option>
          <option value="6">UI/UX</option>
          <option value="7">Поддержка</option>
          <option value="8">Branding</option>
          <option value="9">SEO</option>
        </select>

        <textarea
          className="inputTextarea"
          placeholder="Расскажите о вашей компании"
        ></textarea>


        <button className="inputButton">Отправить</button>
      </div>
    </div>
  );
};

export default Form;
