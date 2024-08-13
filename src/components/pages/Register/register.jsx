import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import userService from "../../services/user.service";
import UserContext from "../../../context/user";
import "./register.scss";

const Register = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    fullname: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true);
    userService
      .register(credentials)
      .then((res) => {
        setLoading(false);
        updateUser();
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
        setCredentials({
          email: "",
          password: "",
          fullname: "",
        });
        setLoading(false);
      });
  };
  return (
    <div className="outRegister">
      <form onSubmit={submitForm} className="register">
        <div className="fullname">
          <p>Your Fullname</p>
          <input
            type="text"
            value={credentials.fullname}
            onChange={(e) =>
              setCredentials({ ...credentials, fullname: e.target.value })
            }
          />
        </div>
        <div className="email">
          <p>Email adress</p>
          <input
            type="email"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
          />
        </div>
        <div className="password">
          <p>Password</p>
          <input
            type="password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
        </div>
        <button type="submit">Регистрация</button>
      </form>
    </div>
  );
};

export default Register;
