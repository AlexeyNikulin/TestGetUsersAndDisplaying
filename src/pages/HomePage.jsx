import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchErrors, fetchLoading, fetchSuccess, clearData } from '../redux/actions';
import {getUsers} from '../services/api'

const HomePage = () => {
    const dispatch = useDispatch();
    const { isLoading, error, data, isClear } = useSelector((state) => state);

    const onGetUsers = () => {
        dispatch(fetchLoading());
        getUsers()
          .then(({ data }) => {
            dispatch(fetchSuccess(data));
          })
          .catch((error) => {
            dispatch(fetchErrors(error));
          });
    }

    const onClearUsers = () => {
      dispatch(clearData());
    };

    return (
      <div className="container">
        <div className="wrapper">
          <button
            onClick={onGetUsers}
            className="waves-effect waves-light btn"
            disabled={isLoading}>
            Получить пользователей
          </button>
          <button onClick={onClearUsers} className="waves-effect red btn">
            Очисть пользователей
          </button>
          <Link to="/users" className="waves-effect orange btn">
            Перейти на страниу пользователей
          </Link>
        </div>
        {data && <div className="text-message success">Данные успешно получены!!!</div>}
        {isClear && <div className="text-message success">Данные успешно очищены!!!</div>}
        {isLoading && <div className="text-message primary">Загрузка...</div>}
        {error && <div className="text-message danger">{error.message}</div>}
      </div>
    );
}

export default HomePage
