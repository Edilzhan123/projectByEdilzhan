import "./Catalog.scss";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductService from "../../services/product.service";

const Catalog = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function getAllProducts() {
    ProductService.getProducts()
      .then((response) => response.data)
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="catalog">
      <div className="browse_work">
        <h4>Каталог</h4>
        <h1>Просмотрите наши работы</h1>
        <div className="catalog_line"></div>
      </div>
      <div className="our_works">
        <div className="cards">
          {products &&
            products.map((card) => (
              <div className="card" key={card.id}>
                <img src={card.img} alt={card.title} />
                <div className="card_about">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <Link to={"/productions/" + card.id}>
                    <button className="view-button">Подробнее</button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
