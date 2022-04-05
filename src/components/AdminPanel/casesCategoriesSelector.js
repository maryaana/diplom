import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export const CasesCategoriesSelector = (props) => {
  let [selected, setSelected] = useState(false);
  let [accumulator, setAccumulator] = useState({});

  function handleSwitch(id) {
    const isSet = accumulator[id];
    if (!isSet) setAccumulator({ ...accumulator, [id]: true });
    else setAccumulator({ ...accumulator, [id]: false });
  }

  useEffect(() => {
    props.onNewState(
      props.tags
        .filter((t) => {
          return Object.entries(accumulator)
            .filter(([k, v]) => v)
            .map(([k, v]) => k)
            .includes(t.id + '');
        })
        .map((t) => t.id)
    );
  }, [accumulator]);

  const entries = props.tags.filter((t) => {
    return Object.entries(accumulator)
      .filter(([k, v]) => v)
      .map(([k, v]) => k)
      .includes(t.id + '');
  });

  return (
    <div
      className={['formCustomSelect', selected && 'formCustomSelectActive'].join(' ')}
      onClick={() => {
        setSelected(!selected);
      }}
    >
      <div className="formSelectRoot admin__formSelectRoot">
        <p className="tagsSelectorOverflowHandler">{entries.map((e) => e.tag + ' ')}</p>
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
                handleSwitch(v.id);
                const accEntries = Object.entries(accumulator)
                  .filter(([k, v]) => v)
                  .map(([k, v]) => k);
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
