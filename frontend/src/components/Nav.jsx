import React from 'react'
import './styles/Nav.css'
import { useNavigate } from "react-router-dom";
import iconLogout from './imgs/logout.svg'
  


function Nav() {
  const user = JSON.parse(localStorage.getItem('user'))

  let navigate = useNavigate(); 
  const logout = () =>{
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    navigate('/login');
  }
  
  const routeHome = () =>{
    navigate('/home');
  }
  const routePedidos = () =>{
    navigate('/pedidos');
  }
  const routeLogin = () =>{
    navigate('/login');
  }
  const routeCompletado = () =>{
    navigate('/completado');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav__back rounded-bottom">
      <div className="container-fluid">
        <button className='nav__title bg-transparent border-0' onClick={routeHome}>
          Automata Digital
        </button>
        {
          user != null
          ?
          <>
            {
              user.rol == 'admin'
              ?
              <>
                <div className="navbar-collapse" >
                  <div className='navbar-nav'>
                    <button onClick={routeHome}  className='nav-link bg-transparent border-0'>Inicio</button>
                  </div>
                  <div className='navbar-nav'>
                    <button onClick={routePedidos}  className='nav-link bg-transparent border-0'>Ver Pedidos</button>
                  </div>
                  <div className='navbar-nav'>
                    <button onClick={routeCompletado}  className='nav-link bg-transparent border-0'>Ver Completado</button>
                  </div>
                </div>
                <div className="navbar-nav mr-auto">
                  <button onClick={logout} type='submit' className='nav__logout bg-transparent border-0'>
                    Logout <img src={iconLogout} alt='icon'/>
                  </button>
                </div>
              </>
              :
              <>
                <div className="navbar-collapse" >
                  <div className='navbar-nav'>
                    <button onClick={routeHome}  className='nav-link bg-transparent border-0'>Inicio</button>
                  </div>
                </div>
                <div className="navbar-nav mr-auto">
                  <button onClick={logout} type='submit' className='nav__logout bg-transparent border-0'>
                    Logout <img src={iconLogout} alt='icon'/>
                  </button>
                </div>
              </>
            }
            
          </>
          :
          <>
            <div className="navbar-collapse" >
              <div className='navbar-nav'>
                <button onClick={routeHome}  className='nav-link bg-transparent border-0'>Home</button>
              </div>
            </div>
            <div className="navbar-nav mr-auto">
              <button onClick={routeLogin} type='submit' className='nav__logout bg-transparent border-0'>
                Sing in <img src={iconLogout} alt='icon'/>
              </button>
            </div>
          </>
        }
      </div>
    </nav>
  )
  
}

export default Nav