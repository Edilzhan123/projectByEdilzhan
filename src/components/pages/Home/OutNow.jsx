import React from "react";
import { Link } from "react-router-dom";

const OutNow = () => {
  return (
    <div className="out_now">
      <div className="line"></div>
      <p>Сейчас в продаже</p>
      <h3>Рыцари Уэльса</h3>
      <p>
        Переведено с английского языка — Knights of Wales — телевизионный
        мини-сериал 2024 года производства NEA Pictures. NEA Entertainment
        распространяла проект на международном уровне. Первоначально он был
        показан 19 апреля 2024 года на телевизоре.
      </p>
      <Link to={"/Catalog"}>Все фильмы</Link>
    </div>
  );
};

export default OutNow;
