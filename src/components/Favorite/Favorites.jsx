import React, { useState, useEffect } from "react";
import "./favorites.scss";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const removeFromFavorites = (productId) => {
    const updatedFavorites = favorites.filter(
      (product) => product.id !== productId
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites">
      <h1>Избранные товары</h1>
      {favorites.length === 0 ? (
        <p>У вас нет избранных товаров</p>
      ) : (
        <div className="myCards">
          <ul>
            {favorites.map((product) => (
              <li key={product.id}>
                <img src={product.img} alt={product.title} />
                <Link to={"/productions/" + product.id}>
                  <p>{product.title}</p>
                </Link>

                <button
                  onClick={() => removeFromFavorites(product.id)}
                  className="remove-button"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
                    alt="Remove Icon"
                    className="icon"
                  />
                  Удалить из избранного
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Favorites;
