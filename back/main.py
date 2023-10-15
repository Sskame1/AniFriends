from fastapi import FastAPI, HTTPException
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import Session
from pydantic import BaseModel

app = FastAPI(title="Backend Anifriend")

# Создание подключения к базе данных
engine = create_engine('sqlite:///users.db')
SQLALCHEMY_DATABASE_URL = "sqlite:///./users.db"
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Создание базы данных
Base = declarative_base()

# Определение модели таблицы 'User'
class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)

# Создаем схему пользователя
class UserSchema(BaseModel):
    id: int
    name: str
    email: str

# Создание таблицы
Base.metadata.create_all(bind=engine)

from sqlalchemy.orm import session


# Функция добавления пользователя в базу данных
@app.post('/users')
def create_user(user_name: str, user_email: str, user_password: str):
    # Создание сессии базы данных
    session = SessionLocal()

    # Создание объекта User
    user = User(name=user_name, email=user_email, password=user_password)

    # Добавление записи в базу данных
    session.add(user)
    session.commit()
    session.refresh(user)

    return user


from sqlalchemy.orm import Session


# Функция удаления пользователя из базы данных
@app.delete('/users')
def delete_user(user_id: int):
    # Создание сессии базы данных
    session = SessionLocal()

    # Получение пользователя по идентификатору
    user = session.query(User).filter(User.id == user_id).first()

    if user:
        # Удаление записи
        session.delete(user)
        session.commit()
        return True

    return False

# Эндпоинт для просмотра пользователя по ID
@app.get("/users/{user_id}")
def get_user(user_id: int):
    db = SessionLocal()
    user = db.query(User).get(user_id)
    db.close()
    return user