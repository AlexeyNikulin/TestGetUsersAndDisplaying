import React from 'react'
import { Link } from 'react-router-dom';
import UserList from '../components/UserList';
import { useSelector } from 'react-redux';

const UsersPage = () => {
    const {isLoading, error, data} = useSelector((state) => state);

    return (
      <div className="container">
        <div className="wrapper">
          <div className="title">Информация о пользователях</div>
          <Link to="/" className="waves-effect orange btn">
            Перейти на главную страницу
          </Link>
        </div>
        {data && (
          <div>
            <UserList data={data} />
          </div>
        )}
        {isLoading &&
            <div className="text-message primary">Загрузка пользователей...</div>
        }
        { error &&
            <div className="text-message danger">Не удалось загрузить пользователей:(</div>
        }
      </div>
    );
}

export default UsersPage
