import React, { useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './AdminTable.scss'
function AdminTable() {
  const [admin, setadmin] = useState([])
  useEffect(() => {
   showAdmin()
  }, [])
  async function showAdmin() {
    const res = await fetch("http://localhost:9000/fidan")
    const data = await res.json()
    setadmin(data)
  }
  async function deleteAdmin(id) {
    const res = await fetch("http://localhost:9000/fidan/"+id,{method:"delete"})
    const data = await res.json()
    showAdmin()
    
  }
  return (
   <>
   <HelmetProvider>
      <Helmet>
        <title>AdminTable</title> 
      </Helmet>
  </HelmetProvider>
   <table>
    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Options</th>
      </tr>
    </thead>

    <tbody>
      {admin.map((x)=>(
        <tr key={x._id}>
          <td><img src={x.image} alt="" /></td>
          <td>{x.name}</td>
          <td>{x.price}</td>
          <td><button onClick={()=>deleteAdmin(x._id)}>X</button></td>

        </tr>
      ))}
    </tbody>

   </table>

   </>
  )
}

export default AdminTable
