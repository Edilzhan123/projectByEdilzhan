import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userService from "../components/services/user.service";
import UserContext from "../context/user";

const Footer = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true);
    userService
      .login(credentials)
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
        });
        setLoading(false);
      });
  };
  return (
    <div className="footer">
      <div className="in_footer">
        <div className="see_first">
          <p>Информационный бюллетень GSL</p>
          <h1>Посмотрите первым</h1>
          <div className="line_footer"></div>
          <div className="outLogin">
            <form className="login" onSubmit={submitForm}>
              <div className="email">
                <label>Электронный адрес</label>
                <input
                  type="email"
                  value={credentials.email}
                  onChange={(e) =>
                    setCredentials({ ...credentials, email: e.target.value })
                  }
                />
              </div>
              <div className="password">
                <p>Пароль</p>
                <input
                  type="password"
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                />
              </div>
              <Link to={"/register"}>У вас нет учетной записи?</Link>
              <button type="submit">Войти</button>
            </form>
          </div>
        </div>
        <div className="subscribe">
          <div className="powered_by">
            <p>© 2024 GSL Productions. Поддерживается и защищена</p>
            <a href="http://wix.com?utm_campaign=vir_created_with">NEA</a>
          </div>
          <div className="social">
            <li>
              <a href="https://instagram.com/wix/">
                <img
                  src="https://static.wixstatic.com/media/d7ffe259c9e54f59837481b3dd0130eb.png/v1/fill/w_26,h_26,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d7ffe259c9e54f59837481b3dd0130eb.png"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="https://vimeo.com/wix">
                <img
                  src="https://static.wixstatic.com/media/1422b22453ff489bbe36b58b1e642f3e.png/v1/fill/w_26,h_26,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1422b22453ff489bbe36b58b1e642f3e.png"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/user/Wix">
                <img
                  src="https://static.wixstatic.com/media/af037f3cc11741d1ada5c7f70d1074bf.png/v1/fill/w_26,h_26,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/af037f3cc11741d1ada5c7f70d1074bf.png"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/wix">
                <img
                  src="https://static.wixstatic.com/media/d3470ec8ca26475da4b228f0199b5d3d.png/v1/fill/w_26,h_26,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d3470ec8ca26475da4b228f0199b5d3d.png"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/wix">
                <img
                  src="https://static.wixstatic.com/media/7177d158c36d432b93f51e54f80e2f3c.png/v1/fill/w_26,h_26,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7177d158c36d432b93f51e54f80e2f3c.png"
                  alt=""
                />
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;