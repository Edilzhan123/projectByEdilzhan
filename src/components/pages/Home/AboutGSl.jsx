import React from "react";
import { Link } from "react-router-dom";

const AboutGSl = () => {
  return (
    <div className="out_gsl">
      <div className="about_gsl">
        <h6>Фильмы | Телешоу | Творческое развитие</h6>
        <h1>О компании GSL Productions</h1>
        <div>
          <p>
            это независимый проект, посвященный миру кино. Мы создаем уникальный
            контент, освещаем новинки индустрии, анализируем фильмы и
            предоставляем зрителям качественные обзоры и рекомендации.
          </p>
          <center>
            <Link to={"/About"}>
              <h5> + Больше информации</h5>
            </Link>
          </center>
        </div>
      </div>
    </div>
  );
};

export default AboutGSl;
