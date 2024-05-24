import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'
import { MainContext } from '../../context/MainProvider'
function Nav() {
    const {basket,wish} = useContext(MainContext)
  return (
 <div className="nav_hero">
   <div className="nav">
    <div className="nav_icon">
        
    </div>
    <div className="nav_list">
        <ul>
            <Link to={"/"}>HOME</Link>
            <Link to={"/add"}>ADD</Link>
            <Link to={"/admin"}>AdminTable</Link>
            <Link to={"/basket"}><i className="fa-solid fa-basket-shopping"></i> {basket.length}</Link>
            <Link to={"/wish"}><i className="fa-solid fa-heart"></i> {wish.length}</Link>
         
            
            
        </ul>
    </div>
    <div className="nav_bars">
      <button><i className="fa-solid fa-bars"></i></button>
    </div>
  </div>
 </div>
  )
}

export default Nav
