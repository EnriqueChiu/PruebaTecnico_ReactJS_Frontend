import { Component } from 'react'
import FormLogin from '../components/FormLogin.jsx';
import api from '../service/Api.js';
import './styles/Login.css'
import Nav from '../components/Nav.jsx';
import { Link, Navigate } from 'react-router-dom';

export default class Login extends Component {

  state={
    load: false,
    error: null,
    auth: false,
    form: {
      email: '',
      password: ''
    },
  }
  
  handleSubmit = async e =>{
    e.preventDefault();
    try{
      let response = await api.user.login(this.state.form)
      let token = await api.token.create()
      if (response.login !== true){
        this.setState({loading: false, error: 'Usuario o contraseña incorrecta'})
      }else{
        this.setState({auth: true})
        localStorage.setItem('user', JSON.stringify(response.data))
        localStorage.setItem('token', token.access)
        this.setState({load: true})
      }
    }catch (error){
      this.setState({loading: false, error: error})
    }
  }

  handleChange = e => {
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }


  render() {
    if (this.state.load){
      return <Navigate to="/home" />
    }

    return(
      <>
        <Nav />
        <div className='container__all'>
          <div className='row'>
            <div className='col offset-4'>  
              <div className='container__formLogin'>
                <FormLogin 
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    formValues={this.state.form}
                    error={this.state.error}
                />
              </div>
              <h2 className='registro'>No tienes cuenta? Registrate <Link className='linkRegisrar' to='/register'>aqui</Link></h2>
            </div>
          </div>
        </div>
      </>
    )
  }

}