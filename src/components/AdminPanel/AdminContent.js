import { useState } from 'react';
import styles from './adminPanelContent.css';

export const AdminContent = ({ content, category, onDelete, onEdit }) => {
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  // const [editId, setEditId] = useState(null);

  let colors = ['#00C46B', '#05208B', '#FFD002', '#D4D9DC', '#1C2026', '#F02529'];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleDelete = (id) => {
    setDeleteModalIsOpen(true);
    setDeleteId(id);
  };

  const handleEdit = (elem) => {
    onEdit(elem);
  };

  const handleModalDelete = () => {
    setDeleteModalIsOpen(false);
    onDelete(deleteId);
  };

  return (
    <div>
      {content.map((elem) => {
        if (category === 'cases') {
          return (
            <div className="adminContent__wrapper">
              <div className="adminContent__imageWrapper" style={{ background: getRandomColor() }}>
                <img src={'/projects/' + elem.avatar} />
              </div>
              <div className="adminContent__inner">
                <h5 className="adminContent__name">{elem.name}</h5>
                <div className="adminContent__tags">
                  {elem.tags.map((tag) => (
                    <p className="adminContent__tag">{tag.tag}</p>
                  ))}
                </div>
                <div className="adminContent__edit" onClick={() => handleEdit(elem)}>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.10236 17.3799C7.08708 17.3951 7.07137 17.4108 7.0553 17.4267C6.86508 17.6158 6.62431 17.8551 6.4532 18.1573C6.2821 18.4595 6.20076 18.7891 6.13651 19.0495C6.13067 19.0731 6.12498 19.0962 6.11938 19.1186L7.33205 19.4218L6.11938 19.1186L5.28996 22.4363C5.28646 22.4503 5.28281 22.4648 5.27903 22.4798C5.23301 22.6629 5.16926 22.9166 5.14729 23.1411C5.12202 23.3994 5.11366 23.9644 5.57464 24.4254L6.40572 23.5943L5.57464 24.4254C6.03561 24.8863 6.60056 24.878 6.85892 24.8527C7.08345 24.8307 7.3371 24.767 7.52022 24.721C7.53521 24.7172 7.54974 24.7135 7.56374 24.71L10.8814 23.8806L10.8814 23.8806C10.8826 23.8803 10.8837 23.88 10.8849 23.8797C10.9062 23.8744 10.9281 23.869 10.9505 23.8635C11.2109 23.7992 11.5405 23.7179 11.8427 23.5468C12.1449 23.3757 12.3842 23.1349 12.5733 22.9447C12.5904 22.9274 12.6072 22.9106 12.6235 22.8942L21.6161 13.9017C21.6322 13.8856 21.6482 13.8696 21.6642 13.8536C22.0391 13.4788 22.4035 13.1146 22.6635 12.7738C22.9567 12.3895 23.2322 11.8921 23.2322 11.25C23.2322 10.6079 22.9567 10.1105 22.6635 9.72623C22.4035 9.38539 22.0391 9.02119 21.6642 8.64643C21.6482 8.63042 21.6322 8.61439 21.6161 8.59835L21.4017 8.38388C21.3856 8.36783 21.3696 8.3518 21.3536 8.33578C20.9788 7.96088 20.6146 7.59654 20.2738 7.33649C19.8895 7.04332 19.3921 6.76777 18.75 6.76777C18.1079 6.76777 17.6105 7.04332 17.2262 7.33649C16.8854 7.59654 16.5212 7.96089 16.1464 8.3358C16.1304 8.35181 16.1144 8.36784 16.0984 8.38388L7.10576 17.3765C7.10463 17.3776 7.1035 17.3787 7.10236 17.3799Z"
                      stroke="#009FD7"
                      stroke-width="2.5"
                    />
                    <path
                      d="M15.625 9.375L19.375 6.875L23.125 10.625L20.625 14.375L15.625 9.375Z"
                      fill="#009FD7"
                    />
                  </svg>
                </div>
                <div className="adminContent__delete" onClick={() => handleDelete(elem.id)}>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5 18.75L12.5 15"
                      stroke="#FF4848"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M17.5 18.75L17.5 15"
                      stroke="#FF4848"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M3.75 8.75H26.25V8.75C25.0851 8.75 24.5027 8.75 24.0433 8.9403C23.4307 9.19404 22.944 9.68072 22.6903 10.2933C22.5 10.7527 22.5 11.3351 22.5 12.5V20C22.5 22.357 22.5 23.5355 21.7678 24.2678C21.0355 25 19.857 25 17.5 25H12.5C10.143 25 8.96447 25 8.23223 24.2678C7.5 23.5355 7.5 22.357 7.5 20V12.5C7.5 11.3351 7.5 10.7527 7.3097 10.2933C7.05596 9.68072 6.56928 9.19404 5.95671 8.9403C5.49728 8.75 4.91485 8.75 3.75 8.75V8.75Z"
                      stroke="#FF4848"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12.5852 4.21324C12.7276 4.08034 13.0415 3.96291 13.4781 3.87915C13.9147 3.7954 14.4497 3.75 15 3.75C15.5503 3.75 16.0853 3.7954 16.5219 3.87915C16.9585 3.96291 17.2724 4.08034 17.4148 4.21324"
                      stroke="#FF4848"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          );
        }

        if (category === 'news') {
          return (
            <div className="adminContent__wrapper">
              <div className="adminContent__newsImageWrapper">
                <img src={'/news/' + elem.avatar} />
              </div>
              <div className="adminContent__inner">
                <h5 className="adminContent__name">{elem.name}</h5>
                <div className="adminContent__meta">
                  <p className="adminContent__metaTag">{elem.tag}</p>
                  <p className="adminContent__metaDate">{elem.creation_date}</p>
                </div>
                <div className="adminContent__edit" onClick={() => handleEdit(elem)}>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.10236 17.3799C7.08708 17.3951 7.07137 17.4108 7.0553 17.4267C6.86508 17.6158 6.62431 17.8551 6.4532 18.1573C6.2821 18.4595 6.20076 18.7891 6.13651 19.0495C6.13067 19.0731 6.12498 19.0962 6.11938 19.1186L7.33205 19.4218L6.11938 19.1186L5.28996 22.4363C5.28646 22.4503 5.28281 22.4648 5.27903 22.4798C5.23301 22.6629 5.16926 22.9166 5.14729 23.1411C5.12202 23.3994 5.11366 23.9644 5.57464 24.4254L6.40572 23.5943L5.57464 24.4254C6.03561 24.8863 6.60056 24.878 6.85892 24.8527C7.08345 24.8307 7.3371 24.767 7.52022 24.721C7.53521 24.7172 7.54974 24.7135 7.56374 24.71L10.8814 23.8806L10.8814 23.8806C10.8826 23.8803 10.8837 23.88 10.8849 23.8797C10.9062 23.8744 10.9281 23.869 10.9505 23.8635C11.2109 23.7992 11.5405 23.7179 11.8427 23.5468C12.1449 23.3757 12.3842 23.1349 12.5733 22.9447C12.5904 22.9274 12.6072 22.9106 12.6235 22.8942L21.6161 13.9017C21.6322 13.8856 21.6482 13.8696 21.6642 13.8536C22.0391 13.4788 22.4035 13.1146 22.6635 12.7738C22.9567 12.3895 23.2322 11.8921 23.2322 11.25C23.2322 10.6079 22.9567 10.1105 22.6635 9.72623C22.4035 9.38539 22.0391 9.02119 21.6642 8.64643C21.6482 8.63042 21.6322 8.61439 21.6161 8.59835L21.4017 8.38388C21.3856 8.36783 21.3696 8.3518 21.3536 8.33578C20.9788 7.96088 20.6146 7.59654 20.2738 7.33649C19.8895 7.04332 19.3921 6.76777 18.75 6.76777C18.1079 6.76777 17.6105 7.04332 17.2262 7.33649C16.8854 7.59654 16.5212 7.96089 16.1464 8.3358C16.1304 8.35181 16.1144 8.36784 16.0984 8.38388L7.10576 17.3765C7.10463 17.3776 7.1035 17.3787 7.10236 17.3799Z"
                      stroke="#009FD7"
                      stroke-width="2.5"
                    />
                    <path
                      d="M15.625 9.375L19.375 6.875L23.125 10.625L20.625 14.375L15.625 9.375Z"
                      fill="#009FD7"
                    />
                  </svg>
                </div>
                <div className="adminContent__delete" onClick={() => handleDelete(elem.id)}>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5 18.75L12.5 15"
                      stroke="#FF4848"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M17.5 18.75L17.5 15"
                      stroke="#FF4848"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M3.75 8.75H26.25V8.75C25.0851 8.75 24.5027 8.75 24.0433 8.9403C23.4307 9.19404 22.944 9.68072 22.6903 10.2933C22.5 10.7527 22.5 11.3351 22.5 12.5V20C22.5 22.357 22.5 23.5355 21.7678 24.2678C21.0355 25 19.857 25 17.5 25H12.5C10.143 25 8.96447 25 8.23223 24.2678C7.5 23.5355 7.5 22.357 7.5 20V12.5C7.5 11.3351 7.5 10.7527 7.3097 10.2933C7.05596 9.68072 6.56928 9.19404 5.95671 8.9403C5.49728 8.75 4.91485 8.75 3.75 8.75V8.75Z"
                      stroke="#FF4848"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12.5852 4.21324C12.7276 4.08034 13.0415 3.96291 13.4781 3.87915C13.9147 3.7954 14.4497 3.75 15 3.75C15.5503 3.75 16.0853 3.7954 16.5219 3.87915C16.9585 3.96291 17.2724 4.08034 17.4148 4.21324"
                      stroke="#FF4848"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          );
        }

        if (category === 'bids') {
          return (
            <div className="adminContent__wrapper adminContent__wrapper_bids">
              <div className="adminContent__bidLeft">
                <p className="adminContent__bidMeta">Имя</p>
                <p className="adminContent__bidMeta">Телефон</p>
                <p className="adminContent__bidMeta">Услуга</p>
                <p className="adminContent__bidMeta">Комментарий</p>
              </div>
              <div className="adminContent__bidRight">
                <p className="adminContent__bidContent">{elem.name}</p>
                <p className="adminContent__bidContent">{elem.phone}</p>
                <p className="adminContent__bidContent">{elem.tag}</p>
                <p className="adminContent__bidContent">{elem.about || '-'}</p>
              </div>
              <div className="adminContent__delete" onClick={() => handleDelete(elem.id)}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 18.75L12.5 15"
                    stroke="#FF4848"
                    stroke-width="2.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M17.5 18.75L17.5 15"
                    stroke="#FF4848"
                    stroke-width="2.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M3.75 8.75H26.25V8.75C25.0851 8.75 24.5027 8.75 24.0433 8.9403C23.4307 9.19404 22.944 9.68072 22.6903 10.2933C22.5 10.7527 22.5 11.3351 22.5 12.5V20C22.5 22.357 22.5 23.5355 21.7678 24.2678C21.0355 25 19.857 25 17.5 25H12.5C10.143 25 8.96447 25 8.23223 24.2678C7.5 23.5355 7.5 22.357 7.5 20V12.5C7.5 11.3351 7.5 10.7527 7.3097 10.2933C7.05596 9.68072 6.56928 9.19404 5.95671 8.9403C5.49728 8.75 4.91485 8.75 3.75 8.75V8.75Z"
                    stroke="#FF4848"
                    stroke-width="2.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M12.5852 4.21324C12.7276 4.08034 13.0415 3.96291 13.4781 3.87915C13.9147 3.7954 14.4497 3.75 15 3.75C15.5503 3.75 16.0853 3.7954 16.5219 3.87915C16.9585 3.96291 17.2724 4.08034 17.4148 4.21324"
                    stroke="#FF4848"
                    stroke-width="2.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          );
        }
      })}

      {deleteModalIsOpen && (
        <div className="adminContent__deleteModal">
          <div className="adminContent__deleteModalContent">
            <p className="adminContent__deleteModalHeading">
              Вы действительно хотите удалить проект?
            </p>
            <p className="adminContent__deleteModalText">Отменить это действие будет невозможно</p>
            <div className="adminContent__deleteModalButtons">
              <div
                className="adminContent__deleteModalBack"
                onClick={() => setDeleteModalIsOpen(false)}
              >
                Назад
              </div>
              <div className="adminContent__deleteModalDelete" onClick={handleModalDelete}>
                Удалить
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
