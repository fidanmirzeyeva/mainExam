import React, { useContext, useEffect, useState } from 'react'
import './Sect4.scss'
import { Link } from 'react-router-dom'
import { MainContext } from '../../context/MainProvider'
function Sect4() {
  const {AddBasket,AddWish} = useContext(MainContext)
  const [products, setproducts] = useState([])
  const [search, setsearch] = useState('')
  useEffect(() => {
  showProducts()
  }, [])
  async function showProducts() {
    const res = await fetch("http://localhost:9000/fidan")
    const data = await res.json()
    setproducts(data)
    
  }
  function sortPrice() {
    setproducts([...products.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))])
    
  }
  
  return (
    <>
    <div className="sect4">
      <div className="sect4_hero">
      <div className="sect4_text">
            <h3>New realeased Products for Women</h3>
            <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="search">
     <button onClick={()=>sortPrice()}>Ucuzdan-Bahaya</button>
      <input type="text" placeholder='Search...' value={search} onChange={((e)=>setsearch(e.target.value))} />
     </div>
      <div className="sect4_cards">
    
      {products.filter(x => x.name.toLowerCase().includes(search.toLocaleLowerCase() ))
      .map((x)=>(
        <div className="sect4_card_text" key={x._id}>
          
            <img src={x.image} alt="" />
         
          
            <h3>{x.name}</h3>
            <h3>${x.price}</h3>
            <div className="btn"><button onClick={()=>AddBasket(x)}>Add Basket</button>
            <button><Link to={`/detail/${x._id}`}>Detail</Link></button>
            <button onClick={()=>AddWish(x)}><i className="fa-solid fa-heart"></i></button>
            </div>

         

        </div>
      ))}
    </div>
      </div>
    </div>
    </>
  )
}

export default Sect4
