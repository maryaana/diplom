import React, { useState } from 'react';
import './AdminPanel.css';
import * as Utils from './../../Utils';
import { CreateNew } from './CreateNew';
import { Link } from 'react-router-dom';
import { AdminContent } from './AdminContent';

const AdminPanel = (props) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminData, setAdminData] = useState({ login: '', password: '' });
  const [category, setCategory] = useState('cases');
  const [createModalIsOpened, setCreateModalIsOpened] = useState(false);

  const handleAdminDataChange = (e) => {
    setAdminData({
      ...adminData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdminAuth = async () => {
    let response = await Utils.AppManager.authAdmin(adminData);
    setIsAdmin(response.data ?? false);
  };

  const handleSwitchCreateModal = () => {
    setCreateModalIsOpened(!createModalIsOpened);
  };

  const getContent = () => {
    return props[category];
  };

  const handleEdit = () => {};

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
    </div>
  );
};

export default AdminPanel;
