import React, { createContext, useState } from 'react'

export const MainContext = createContext()
function MainProvider({children}) {
    const [basket, setbasket] = useState([])
    const [wish, setwish] = useState([])
    function AddBasket(item) {
        setbasket([...basket,item])
        
    }
    function AddWish(item) {
      setwish([...wish,item])
      
  }
  return (
    <>
    <MainContext.Provider value={{setbasket,AddBasket,basket,wish,setwish,AddWish}}>
        {children}
    </MainContext.Provider>
    </>
  )
}

export default MainProvider
