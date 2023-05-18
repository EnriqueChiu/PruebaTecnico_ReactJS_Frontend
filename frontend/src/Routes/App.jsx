import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import Register from '../Pages/Register'
import Pedidos from '../Pages/Pedidos'
import Completado from '../Pages/Completado'


function App() {
  return(
    <>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/pedidos' element={<Pedidos/>}/>
        <Route path='/completado' element={<Completado/>}/>
        <Route path='*' element={<Login /> }/>
      </Routes>
    </>
  )
}

export default App
