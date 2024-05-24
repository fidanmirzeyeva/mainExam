import React, { useContext } from 'react'
import { MainContext } from '../../context/MainProvider'
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Wish() {
    const {wish} = useContext(MainContext)
  return (
    <>
      <HelmetProvider>
      <Helmet>
        <title>Wishlist</title> 
      </Helmet>
  </HelmetProvider>
         <div className="basket">
        {wish.map((x) => (
          <div className="basket_card" key={x._id}>
            <img src={x.image} alt=""  />
            <h3>{x.name}</h3>

            <h4>{x.price}</h4>
          </div>
        ))}
      </div>
    </>
  )
}

export default Wish
