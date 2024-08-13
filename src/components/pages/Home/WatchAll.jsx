import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ProductService from "../../services/product.service";

const WatchAll=()=> {
   const [products, setProducts] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const navigate = useNavigate();

   async function getAllProducts() {
     ProductService
       .getProducts()
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
    <div className="cardsOut">
      <div className="latest">
        <p>Наши последние релизы | </p>
        <Link to={"/About"}>Вы можете посмотреть О нас</Link>
      </div>
      <div className="cards">
        {products &&
          products.map((card, index) => (
            <div className="card" key={index}>
              <img src={card.img} alt={card.title} />
              <Link to={"/productions/" + card.id}>
                <div className="card_about">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default WatchAll;
