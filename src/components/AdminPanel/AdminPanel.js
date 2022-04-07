import React, { useState } from 'react';
import './AdminPanel.css';
import * as Utils from './../../Utils';
import { CreateNew } from './CreateNew';
import { Link } from 'react-router-dom';
import { AdminContent } from './AdminContent';
import { NewsCategoriesSelector } from './newsCategoriesSelector';
import { CasesCategoriesSelector } from './casesCategoriesSelector';

const AdminPanel = (props) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminData, setAdminData] = useState({ login: '', password: '' });
  const [category, setCategory] = useState('cases');
  const [createModalIsOpened, setCreateModalIsOpened] = useState(false);
  const [editModalIsOpened, setEditModalIsOpened] = useState(false);

  const [createData, setCreateData] = useState({});
  const [editData, setEditData] = useState({});

  const handleAdminDataChange = (e) => {
    setAdminData({
      ...adminData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdminAuth = async () => {
    let response = await Utils.AppManager.authAdmin(adminData);
    if (!response.data) alert('Неверный логин или пароль!');
    setIsAdmin(response.data ?? false);
  };

  const handleSwitchCreateModal = () => {
    setCreateModalIsOpened(!createModalIsOpened);
  };

  const getContent = () => {
    return props[category];
  };

  const handleEdit = (elem) => {
    setEditModalIsOpened(true);
    setEditData(elem);
  };

  const handleDelete = async (id) => {
    if (category === 'cases') {
      let response = await Utils.AppManager.cases.delete(id);
      if (response.success) props.onElemDeleted(category, id);
    }
    if (category === 'news') {
      let response = await Utils.AppManager.news.delete(id);
      if (response.success) props.onElemDeleted(category, id);
    }
    if (category === 'bids') {
      let response = await Utils.AppManager.bids.delete(id);
      if (response.success) props.onElemDeleted(category, id);
    }
  };

  const handleCreationDataChange = (e) => {
    setCreateData({ ...createData, [e.target.name]: e.target.value });
  };

  const handleEditionDataChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleCreationDataFileChange = (e) => {
    const fileReader = new FileReader();
    const uploadedFile = e.target.files;
    if (uploadedFile[0] && uploadedFile[0].type.includes('image')) {
      fileReader.readAsDataURL(uploadedFile[0]);
      fileReader.onload = (event) => {
        setCreateData({ ...createData, [e.target.name]: event.target.result });
      };
    }
  };

  const handleEditionDataFileChange = (e) => {
    const fileReader = new FileReader();
    const uploadedFile = e.target.files;
    if (uploadedFile[0] && uploadedFile[0].type.includes('image')) {
      fileReader.readAsDataURL(uploadedFile[0]);
      fileReader.onload = (event) => {
        setEditData({ ...editData, [e.target.name]: event.target.result });
      };
    }
  };

  const handleNewNewsCategory = (id) => {
    setCreateData({ ...createData, categories: id });
  };

  const handleNewCasesCategory = (ids) => {
    setCreateData({ ...createData, categories: ids.join(',') });
  };

  const handleEditNewsCategory = (id) => {
    setEditData({ ...editData, categories: id });
  };

  const handleEditCasesCategory = (ids) => {
    setEditData({ ...editData, categories: ids.join(',') });
  };

  const handleCreate = async () => {
    //TODO: validation

    if (category === 'cases') {
      let response = await Utils.AppManager.cases.create(createData);
      if (response.success) {
        props.onElemCreated(category, createData, response.id);
      }
    }
    if (category === 'news') {
      let response = await Utils.AppManager.news.create(createData);
      if (response.success) {
        props.onElemCreated(category, createData, response.id);
      }
    }
    setCreateData({});
    setCreateModalIsOpened(false);
  };

  const handleEditSubmit = async () => {
    //TODO: validation
    if (category === 'cases') {
      let response = await Utils.AppManager.cases.re(editData);
      if (response.success) {
        props.onElemEdited(category, editData, response.id, response.name);
      }
    }
    if (category === 'news') {
      let response = await Utils.AppManager.news.re(editData);
      if (response.success) {
        props.onElemEdited(category, editData, response.id, response.name);
      }
    }
    setEditData({});
    setEditModalIsOpened(false);
  };

  const resetCreation = () => {
    setCreateData({});
    setCreateModalIsOpened(false);
  };

  const resetEdition = () => {
    setEditData({});
    setEditModalIsOpened(false);
  };

  if (!isAdmin) {
    return (
      <div className="admin__authWrapper">
        <h2 className="admin__enterHeading">Панель администратора</h2>
        <input
          className="inputText admin__authInput"
          onChange={handleAdminDataChange}
          name="login"
          placeholder="Логин"
        ></input>
        <input
          className="inputText admin__authInput"
          onChange={handleAdminDataChange}
          name="password"
          type="password"
          placeholder="Пароль"
        ></input>
        <div className="admin__enterButton" onClick={handleAdminAuth}>
          Войти в систему
        </div>
      </div>
    );
  }

  return (
    <div className="admin__contentWrapper">
      {createModalIsOpened && (
        <div className="admin__contentInner">
          <h3 className="admin__heading">Админ-панель</h3>
          <h4 className="admin__creationSubHeading">
            Создание {category === 'cases' ? 'проекта' : 'новости'}
          </h4>
          <div className="admin__creationWrapper">
            <div className="admin__creationLeft">
              <div className="admin__creationBlock">
                <p className="admin__creationHint">
                  Название {category === 'cases' ? 'проекта' : 'новости'}
                </p>
                <input
                  className="inputText"
                  onChange={handleCreationDataChange}
                  name="name"
                  placeholder="Lorem Ipsum dolor sit"
                />
              </div>
              <div className="admin__creationBlock">
                <p className="admin__creationHint">
                  {category === 'cases' ? 'Ссылка на проект' : 'Дата создания'}
                </p>
                <input
                  className="inputText"
                  onChange={handleCreationDataChange}
                  name="moreInfo"
                  placeholder={category === 'cases' ? 'https://loremipsum.ru' : '11.12.2021'}
                />
              </div>
              <div className="admin__creationBlock">
                <p className="admin__creationHint">
                  {category === 'cases' ? 'Категории проектов' : 'Категория записи'}
                </p>
                <div>
                  {category === 'cases' ? (
                    <CasesCategoriesSelector
                      tags={props.casesTags}
                      onNewState={handleNewCasesCategory}
                    />
                  ) : (
                    <NewsCategoriesSelector
                      tags={props.newsTags}
                      onNewState={handleNewNewsCategory}
                    />
                  )}
                </div>
              </div>
              <div className="admin__creationBlock">
                <p className="admin__creationHint">
                  Главная фотография {category === 'cases' ? 'проекта' : 'новости'}
                </p>
                <label className="admin__loadLabel" for="file">
                  {!createData.file ? (
                    'Загрузить фотографию'
                  ) : (
                    <img src={createData.file} className="admin__loadLabel" />
                  )}
                </label>
                <input
                  id="file"
                  onChange={handleCreationDataFileChange}
                  name="file"
                  type="file"
                  accept="image/png"
                  style={{ display: 'none' }}
                />
              </div>
              <input
                type="submit"
                className="admin__creationSubmit"
                value="Сохранить"
                onClick={handleCreate}
              ></input>
              <p className="admin__creationCancel" onClick={resetCreation}>
                Отмена
              </p>
            </div>
            <div className="admin__creationRight">
              <p className="admin__creationHint">
                Описание {category === 'cases' ? 'проекта' : 'новости'} (до 1000 знаков)
              </p>
              <textarea
                onChange={handleCreationDataChange}
                name="description"
                className="inputTextarea admin__creationTextArea"
                placeholder="Описание"
              />
            </div>
          </div>
        </div>
      )}

      {editModalIsOpened && (
        <div className="admin__contentInner">
          <h3 className="admin__heading">Админ-панель</h3>
          <h4 className="admin__creationSubHeading">
            Создание {category === 'cases' ? 'проекта' : 'новости'}
          </h4>
          <div className="admin__creationWrapper">
            <div className="admin__creationLeft">
              <div className="admin__creationBlock">
                <p className="admin__creationHint">
                  Название {category === 'cases' ? 'проекта' : 'новости'}
                </p>
                <input
                  className="inputText"
                  onChange={handleEditionDataChange}
                  value={editData.name}
                  name="name"
                  placeholder="Lorem Ipsum dolor sit"
                />
              </div>
              <div className="admin__creationBlock">
                <p className="admin__creationHint">
                  {category === 'cases' ? 'Ссылка на проект' : 'Дата создания'}
                </p>
                <input
                  className="inputText"
                  onChange={handleEditionDataChange}
                  defaultValue={editData.creation_date ? editData.creation_date : editData.link}
                  value={editData.moreInfo}
                  name="moreInfo"
                  placeholder={category === 'cases' ? 'https://loremipsum.ru' : '11.12.2021'}
                />
              </div>
              <div className="admin__creationBlock">
                <p className="admin__creationHint">
                  {category === 'cases' ? 'Категории проектов' : 'Категория записи'}
                </p>
                <div>
                  {category === 'cases' ? (
                    <CasesCategoriesSelector
                      tags={props.casesTags}
                      onNewState={handleEditCasesCategory}
                    />
                  ) : (
                    <NewsCategoriesSelector
                      tags={props.newsTags}
                      onNewState={handleEditNewsCategory}
                    />
                  )}
                </div>
              </div>
              <div className="admin__creationBlock">
                <p className="admin__creationHint">
                  Главная фотография {category === 'cases' ? 'проекта' : 'новости'}
                </p>
                <label className="admin__loadLabel" for="file">
                  {!editData.file ? (
                    'Загрузить фотографию'
                  ) : (
                    <img src={editData.file ?? editData.avatar} className="admin__loadLabel" />
                  )}
                </label>
                <input
                  id="file"
                  onChange={handleEditionDataFileChange}
                  name="file"
                  type="file"
                  accept="image/png"
                  style={{ display: 'none' }}
                />
              </div>
              <input
                type="submit"
                className="admin__creationSubmit"
                value="Сохранить"
                onClick={handleEditSubmit}
              ></input>
              <p className="admin__creationCancel" onClick={resetEdition}>
                Отмена
              </p>
            </div>
            <div className="admin__creationRight">
              <p className="admin__creationHint">
                Описание {category === 'cases' ? 'проекта' : 'новости'} (до 1000 знаков)
              </p>
              <textarea
                onChange={handleEditionDataChange}
                value={editData.description}
                name="description"
                className="inputTextarea admin__creationTextArea"
                placeholder="Описание"
              />
            </div>
          </div>
        </div>
      )}

      {!createModalIsOpened && !editModalIsOpened && (
        <div className="admin__contentInner">
          <h3 className="admin__heading">Админ-панель</h3>
          <div className="admin__filters">
            <div
              className={`admin__filter ${category === 'cases' && 'admin__filter_active'}`}
              onClick={() => setCategory('cases')}
            >
              Проекты ({props.cases.length})
            </div>
            <div
              className={`admin__filter ${category === 'news' && 'admin__filter_active'}`}
              onClick={() => setCategory('news')}
            >
              Новости/Анонсы ({props.news.length})
            </div>
            <div
              className={`admin__filter ${category === 'bids' && 'admin__filter_active'}`}
              onClick={() => setCategory('bids')}
            >
              Заявки ({props.bids.length})
            </div>
          </div>
          <div className="admin__contentBox">
            <CreateNew activeCategory={category} onClick={handleSwitchCreateModal} />
            <AdminContent
              category={category}
              content={getContent()}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />

            <div className="admin__logout">
              <Link to="/">Выйти</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
