import React, { Component } from 'react'
import Nav from '../components/Nav'
import api from '../service/Api';
import Cards from '../components/Cards';
import { Navigate } from 'react-router-dom';

export class Pedidos extends Component {

  completar = async e =>{
    e.preventDefault();
    try{
      let response = await api.producto.completar({id: e.target.value});
      alert(response.message)
      window.location.reload(false);
    }catch (error){
      this.setState({error: error})
    }
  }

  render() {

    return(
      <>
        <Nav />
        <div className='container__home'>
          <div className='row'>  
          <Cards 
              accion={this.completar}
              accionStr = {'Completar'}
              pag = {'pedidos'}
              disponible= {false}
              pedidos= {true}
              completado= {false}
            />
          </div>
        </div>
      </>
    )
  }
}

export default Pedidos