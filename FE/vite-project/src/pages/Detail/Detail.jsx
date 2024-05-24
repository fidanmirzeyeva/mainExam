import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Detail.scss'

function Detail() {
  const {id} = useParams()
  const [detail, setdetail] = useState([])
  useEffect(() => {
   showDetail()
  }, [])
  async function showDetail() {
    const res = await fetch(`http://localhost:9000/fidan/${id}`)
    const data = await res.json()
    setdetail(data)
    
  }
  
  return (
    <>
    <div className="detail">
      <img src={detail.image} alt="" />
      <div className="detail_text">
      <h3>{detail.name}</h3>
      <h4>{detail.price}</h4>
      </div>
    </div>
    </>
  )
}

export default Detail
