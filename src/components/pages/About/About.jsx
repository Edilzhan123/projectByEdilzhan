import React, { useEffect, useState } from "react";
import "./About.scss";
import axios from "axios";

const About = () => {
  const [images, setImages] = useState([]);
  const url = "/images.json";

  useEffect(() => {
    axios.get(url).then((res) => {
      setImages(res.data.images);
    });
  }, []);

  return (
    <div className="about">
      <div className="about_div">
        <h4>О нас</h4>
        <h1>Проекты производства</h1>
        <p>
          Проекты производства GSL Productions включают создание документальных
          фильмов, художественных картин и короткометражных лент. Мы стремимся к
          высокому качеству и оригинальности в каждом проекте, работая с
          талантливыми режиссерами, сценаристами и актерами, чтобы воплотить
          наши идеи в жизнь и подарить зрителям незабываемые впечатления.
        </p>
        <div className="line_of_about"></div>
      </div>
      <div className="the_team">
        <p>Команда</p>
        <h1>Участники проекта</h1>
      </div>
      <div className="image_cards">
        {images.map((image, index) => (
          <div key={index} className="image" id={image.id}>
            <img src={image.img} alt="" />
            <h3>{image.name}</h3>
            <p>{image.profession}</p>
            <a href="mailto:info@mysite.com">info@mysite.com</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
