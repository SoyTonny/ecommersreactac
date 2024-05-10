import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePages from './pages/HomePages'
import Prodid from './pages/Prodid'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'
import ProtectedRoutes from './pages/ProtectedRoutes'
import NavBar from './components/share/NavBar'

function App() {
  
  return (
    <>
      <div>
      <NavBar
      
      />
        <Routes>
          <Route path='/' element={<HomePages/>}/>
          <Route path='/product/:id' element={<Prodid/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/purchases' element={<Purchases/>}/>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
