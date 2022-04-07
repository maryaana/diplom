import react, { useState } from 'react';
import './Form.css';
import { CSSTransition } from 'react-transition-group';

const Form = (props) => {
  let [content, setContent] = useState(-1);
  let [selected, setSelected] = useState(false);
  let [acc, setAcc] = useState({});

  const { id } = props;

  function resetForm() {
    setContent(-1);
  }

  function handleSwitchNewFormState() {
    setSelected(!selected);
  }

  const handleChange = (e) => {
    setAcc({ ...acc, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!acc.name || !acc.phone || content === -1) {
      alert('Пожалуйста, введите все поля для отправки');
      return;
    }
    props.onNewBid({ ...acc, tagId: content });
    setAcc({});
    setContent(-1);
  };

  return (
    <div className="formWrapper" id={id}>
      <div className="moveRight"></div>
      <div className="inputWrapper">
        <input
          className="inputText"
          name="name"
          value={acc.name ?? ''}
          onChange={handleChange}
          placeholder="Имя*"
        ></input>
        <input
          className="inputText"
          name="phone"
          value={acc.phone ?? ''}
          onChange={handleChange}
          placeholder="Телефон*"
        ></input>

        <div
          className={['formCustomSelect', selected && 'formCustomSelectActive'].join(' ')}
          onClick={() => {
            handleSwitchNewFormState();
            resetForm();
          }}
        >
          <div className="formSelectRoot">
            <p>
              {content === -1
                ? 'Какие услуги вас интересуют?'
                : `Интересует: ${props.casesTags[content - 1]?.tag}`}
            </p>
            <svg
              width="16"
              height="8"
              viewBox="0 0 16 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L8 7L15 1" stroke="#424242" />
            </svg>
          </div>
          <CSSTransition
            in={selected}
            timeout={300}
            classNames="formSelectOptionsAppearence"
            unmountOnExit
          >
            <div className="formSelectOptions">
              {props.casesTags?.map((v, i) => (
                <div
                  key={`option-${i}`}
                  className="formSelectOption"
                  onClick={(e) => {
                    e.stopPropagation();
                    setContent(v.id);
                    handleSwitchNewFormState();
                  }}
                >
                  {v.tag}
                </div>
              ))}
            </div>
          </CSSTransition>
        </div>

        <textarea
          className="inputTextarea"
          name="description"
          value={acc.description ?? ''}
          onChange={handleChange}
          placeholder="Расскажите о вашей компании"
        ></textarea>

        <button className="inputButton" onClick={handleSubmit}>
          Отправить
        </button>
      </div>
    </div>
  );
};

export default Form;
