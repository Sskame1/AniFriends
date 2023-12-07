# 🌟 Команда PULSAR: Проект AniFriends 🌟
!!!Это с Хакатона!!!
| Должность | ФИ |
| --- | --- |
| Разработчик | Строганов Анатолий |
| Дизайнер | Лаппаров Борис |
| Менеджер | Теленков Влад |

Мы разрабатываем веб-сайт и веб-приложение для синхронного просмотра аниме одной или несколькими группами пользователей.

## 🛠 Stack-технологии
- HTML
- CSS
- JavaScript
- React.js
- Node.js
- Python
- FastApi
  
# Инструкции по сборке

## 1. Установка Node.js

Для запуска React.js необходимо установить Node.js с [официального сайта](https://nodejs.org/en) и загрузить рекомендуемую версию ```LTS```.

Затем необходимо перейти в папку  ```Frontend```.

## 2. Включение локального сервера React.js

Чтобы запустить локальный сервер React.js, откройте консоль или терминал и введите команду для локального сервера:

```
npm start
```
или
```
yarn start
```

После этого перейдите на локальный сервер в браузере по адресу:

```
http://localhost:3000
```

## 3. Установка Python и запуск локального сервера FastAPI

Для работы с FastAPI на компьютере должен быть установлен Python.

Посетите [официальный сайт](https://www.python.org/) Python и загрузите [версию 3.11.6](https://www.python.org/downloads/release/python-3116/) или выше.

Затем откройте командную строку или терминал и перейдите в папку ```Back```, набрав:

```
cd .\back\
```

Запустите локальный сервер, написав команду:

*Windows*
```
uvicorn main:app --reload
```

*Linux*
```
uvicorn main:app --reload
```

Затем зайдите на локальный сервер FastAPI по адресу:
```
http://localhost:8000/docs
```
