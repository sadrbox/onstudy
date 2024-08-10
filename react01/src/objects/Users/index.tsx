import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Users.module.scss";
import { isValidEmail, stringJoin } from "src/utils/functions";

// type TPropsUsers = {
//   id: number;
//   username: string;
//   password: string;
//   email: string;
//   firstname: string;
//   lastname: string;
//   middlename: string;
//   fullname: string;
// };

const OUser = {
  // id: 0,
  username: "",
  password: "",
  email: "",
  firstname: "",
  lastname: "",
  middlename: "",
  fullname: "",
};

const OPassword = {
  pass1: "",
  pass2: "",
};

const OValidFields = {
  username: false,
  password: false,
  email: false,
  firstname: true,
  lastname: true,
  middlename: true,
  fullname: true,
};

type TUser = typeof OUser;
type TPassword = typeof OPassword;
type TValidFields = typeof OValidFields;

const Users = () => {
  const [users, setUsers] = useState<TUser[]>([]);
  const [user, setUser] = useState<TUser>(OUser);
  const [password, setPassword] = useState<TPassword>(OPassword);
  const [validFields, setValidFields] = useState<TValidFields>(OValidFields);

  // Функция для получения пользователей
  const fetchUsers = () => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  };

  useEffect(() => {
    if (validFields) {
      setValidFields({
        ...validFields,
        email: user.email !== "" && isValidEmail(user.email),
        username: user.username !== "",
        password: password.pass1 !== "" && password.pass1 === password.pass2,
      });
    }
  }, [user, password]);

  // Получение пользователей при монтировании компонента
  useEffect(() => {
    fetchUsers();
  }, [users]);

  // Функция для добавления нового пользователя
  const addUser = () => {
    const validated = Object.values(validFields).some(
      (value) => value === false,
    );
    if (!validated)
      axios
        .post("http://localhost:3000/users", {
          ...user,
          fullname: stringJoin(user.firstname, user.lastname, user.middlename),
          password: password.pass1,
        })
        .then((response) => {
          setUsers([...users, response.data]);
          setUser(OUser);
          setPassword(OPassword);
        })
        .catch((error) => {
          console.error("There was an error creating the user!", error);
        });
  };

  return (
    <form
      // onContextMenu={(event) => event.preventDefault()}
      autoComplete="off"
      className={`${styles.elementForm} ${"p-2"}`}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="colGroup">
        <div className="rowGroup p-2">
          <h1 className="text-">Пользователь: Новый</h1>
        </div>
        <div className="rowGroup p-2 bg-slate-200">
          <button onClick={addUser} className={styles.submitButton}>
            Сохранить
          </button>
        </div>

        <div className="rowGroup p-2">
          <div className="colGroup">
            <label>
              <div>Имя пользователя</div>
              <input
                style={{
                  borderColor: validFields.username ? "initial" : "red",
                }}
                type="text"
                placeholder="Имя пользователя"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                className={styles.inputField}
              />
            </label>
            <label>
              <div>Электронная почта</div>
              <input
                style={{ borderColor: validFields.email ? "initial" : "red" }}
                type="email"
                placeholder="Электронная почта"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className={styles.inputField}
              />
            </label>
            <label>
              <div>Пароль</div>
              <input
                style={{
                  borderColor: validFields.password ? "initial" : "red",
                }}
                type="text"
                placeholder="Пароль"
                value={password.pass1}
                onChange={(e) =>
                  setPassword({ ...password, pass1: e.target.value })
                }
                className={styles.inputField}
              />
            </label>
            <label>
              <div>Проверка пароля</div>
              <input
                style={{
                  borderColor: validFields.password ? "initial" : "red",
                }}
                type="text"
                placeholder="Проверка пароля"
                value={password.pass2}
                onChange={(e) =>
                  setPassword({ ...password, pass2: e.target.value })
                }
                className={styles.inputField}
              />
            </label>
          </div>
          <div className="colGroup">
            <label>
              <div>Имя</div>
              <input
                type="text"
                placeholder="Имя"
                value={user.firstname}
                onChange={(e) =>
                  setUser({ ...user, firstname: e.target.value.trim() })
                }
                className={styles.inputField}
              />
            </label>
            <label>
              <div>Фамилия</div>
              <input
                type="text"
                placeholder="Фамилия"
                value={user.lastname}
                onChange={(e) =>
                  setUser({ ...user, lastname: e.target.value.trim() })
                }
                className={styles.inputField}
              />
            </label>
            <label>
              <div>Отчество</div>
              <input
                type="text"
                placeholder="Отчество"
                value={user.middlename}
                onChange={(e) =>
                  setUser({ ...user, middlename: e.target.value.trim() })
                }
                className={styles.inputField}
              />
            </label>
          </div>
          <div className="colGroup"></div>
          <ul>
            {users &&
              users.map((e, rowID) => (
                <li key={rowID}>
                  {Object.entries(e).map(([key, value]) => (
                    <p key={key}>{value}</p>
                  ))}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </form>
  );
};

export default Users;
