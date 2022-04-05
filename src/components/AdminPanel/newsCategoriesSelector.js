import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export const NewsCategoriesSelector = (props) => {
  let [content, setContent] = useState(-1);
  let [selected, setSelected] = useState(false);

  function resetForm() {
    setContent(-1);
  }

  function handleSwitchNewFormState() {
    setSelected(!selected);
  }

  return (
    <div
      className={['formCustomSelect', selected && 'formCustomSelectActive'].join(' ')}
      onClick={() => {
        handleSwitchNewFormState();
        resetForm();
      }}
    >
      <div className="formSelectRoot admin__formSelectRoot">
        <p>{content === -1 ? 'Категория' : `${props.tags.find((t) => t.id === content)?.tag}`}</p>
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
          {props.tags?.map((v, i) => (
            <div
              key={`option-${i}`}
              className="formSelectOption"
              onClick={(e) => {
                e.stopPropagation();
                setContent(v.id);
                handleSwitchNewFormState();
                props.onNewState(v.id);
              }}
            >
              {v.tag}
            </div>
          ))}
        </div>
      </CSSTransition>
    </div>
  );
};
