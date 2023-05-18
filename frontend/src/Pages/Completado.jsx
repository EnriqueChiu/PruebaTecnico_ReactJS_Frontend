import React, { Component } from 'react'
import Nav from '../components/Nav'
import Cards from '../components/Cards'

export class Completado extends Component {
  render() {
    return(
      <>
        <Nav />
        <div className='container__home'>
          <div className='row'>  
          <Cards 
              pag = {'completado'}
              disponible= {false}
              pedidos= {false}
              completado= {true}
            />
          </div>
        </div>
      </>
    )
  }
}

export default Completado