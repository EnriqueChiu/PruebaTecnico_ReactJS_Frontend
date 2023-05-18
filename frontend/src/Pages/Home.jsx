import { Component } from 'react'
import api from '../service/Api.js';
import './styles/Home.css'
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import FormProducto from '../components/FormProducto.jsx';
import { Navigate } from 'react-router-dom';



export default class Home extends Component {

  //let base64 = ''
  state = {
    base: '',
    user: JSON.parse(localStorage.getItem('user')), 
    modalData:{
      nombre: '',
      imagen: '',
      artesano: '',
      precio: 0,
      sku: ''
    }
  }


  handleChangeModal = e => {
    if(e.target.name == 'imagen'){
      const file = e.target.files[0]
      var reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () =>{
        this.setState({base: reader.result})
      }
      
    }else{
      this.setState({
        modalData:{
          ...this.state.modalData,
          [e.target.name]: e.target.value,
        }
      })
    }
  }

  handleSumbitModal = async e =>{
    e.preventDefault();
    try {
      this.state.modalData.imagen = this.state.base
      let response = await api.create.producto(this.state.modalData);
      alert(response.message)
      window.location.reload(false);
    } catch (error) {
      this.setState({error: error})
    }
  }

  comprar = async e =>{
    e.preventDefault();
    try{
      let response = await api.producto.comprar({id: e.target.value});
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
          {
            this.state.user != null
            ?
            <>
              {
                this.state.user.rol != 'admin'
                ?
                <></>
                :
                <>
                  <FormProducto 
                    formValues={this.state.modalData}
                    onChange={this.handleChangeModal} 
                    onSubmit={this.handleSumbitModal}
                  />
                </>
              }
            </>
            :
            <></>
          }
          
          <div className='row'>  
            <Cards 
              accion={this.comprar}
              accionStr = {'Comprar'}
              pag = {'compra'}
              disponible= {true}
              pedidos= {false}
              completado= {false}
            />
          </div>
        </div>
      </>
    )
  }
}