import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="header_logo">
            <img
              src="https://static.wixstatic.com/media/f2ac30_e3bb88310ca241a39a9b751188ac6a39~mv2.png/v1/fill/w_134,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f2ac30_e3bb88310ca241a39a9b751188ac6a39~mv2.png"
              alt=""
            />
          </div>
          <div className="header_link">
            <Link to={"/"}>Главное</Link>
            <Link to={"/Catalog"}>Каталог</Link>
            <Link to={"/About"}>О нас</Link>
            <Link to={"/Contacts"}>Свяжитесь с нами</Link>
            <Link to={"/Favorites"}>Моё</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
