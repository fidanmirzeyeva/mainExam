import React, { useContext } from "react";
import { MainContext } from "../../context/MainProvider";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './Basket.scss'

function Basket() {
  const { basket } = useContext(MainContext);
 
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>Basket</title> 
      </Helmet>
  </HelmetProvider>
      <div className="basket">
        {basket.map((x) => (
          <div className="basket_card" key={x._id}>
            <img src={x.image} alt=""  />
            <h3>{x.name}</h3>

            <h4>{x.price}</h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default Basket;
