import React, { useState } from 'react';
import { Link } from 'react-router-dom';    

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Отправка запроса к API для авторизации
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        password,
      }),
    });

    // Обработка ответа от API
    if (response.status === 200) {
      // Успешная авторизация, выполните нужные действия
      console.log('Успешная авторизация');
    } else {
      // Неверные учетные данные, вывод ошибки или выполнение других действий
      console.log('Неверные учетные данные');
    }
  };

  return (
    <div>
      <h2>Авторизация</h2>
      <input
        type="text"
        placeholder="Имя пользователя"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Войти</button>
      <Link to="/register">Нету аккаунта? Зарегистрируйтесь!</Link>
    </div>
  );
};
export default Login