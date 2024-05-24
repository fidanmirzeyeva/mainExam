import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home/Home';
import Basket from './pages/Basket/Basket';
import Add from './pages/Add/Add';
import AdminTable from './pages/AdminTable/AdminTable';
import Detail from './pages/Detail/Detail';
import MainProvider from './context/MainProvider';
import Wish from './pages/WishList/Wish';
function App() {


  return (
    <>
     <MainProvider>
     <BrowserRouter>
      <Routes>
       <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/wish' element={<Wish/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/admin' element={<AdminTable/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>

       </Route>
      </Routes>
    </BrowserRouter>
     </MainProvider>
    </>
  )
}

export default App
