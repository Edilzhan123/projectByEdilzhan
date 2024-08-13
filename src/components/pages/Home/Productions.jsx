import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Productions.scss";
import productService from "../../services/product.service";
import { addToFavorites } from "../../Favorite/Favorite";

const Productions = () => {
  const [card, setCard] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      productService.getProduct(id).then((res) => setCard(res.data));
    }
  }, [id]);

  const handleFavoriteClick = () => {
    if (card) {
      addToFavorites(card); // Передача полного объекта продукта
    }
  };

  return (
    <div className="production">
      {card && (
        <>
          <div className="image_of_card">
            <a href="/Catalog">Back to Catalogue</a>
            <h1>{card.title}(2024)</h1>
            <img src={card.image} alt="" />
          </div>
          <div className="info_card">
            <div className="product_line"></div>
            <h4>2h 15min&nbsp;|&nbsp;Language&nbsp;|&nbsp;Producer Director</h4>
            <p>
              Наши продукты о кино созданы для настоящих ценителей искусства.
              Они охватывают широкий спектр жанров и предоставляют уникальный
              взгляд на каждый фильм, создавая незабываемые впечатления для
              зрителей.
            </p>
            <p>
              Эти продукты предлагают глубокое погружение в мир кино. Каждая
              работа тщательно подобрана, чтобы вдохновлять и развлекать
              поклонников всех жанров и направлений.
            </p>
            <div className="buttons">
              <Link to={"/Contacts"}>
                <button>Get Screening License</button>
              </Link>
              <button className="toFavorite" onClick={handleFavoriteClick}>
                <img
                  src="https://cdn-icons-png.flaticon.com/256/865/865151.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Productions;
