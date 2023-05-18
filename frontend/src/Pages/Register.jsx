import React, { Component } from 'react'
import api from '../service/Api.js';
import './styles/Login.css'
import Nav from '../components/Nav.jsx';
import FormRegister from '../components/FormRegister.jsx';
import { Link, Navigate   } from 'react-router-dom';

export class Register extends Component {
  
  state={
    load: false,
    error: null,
    form: {
      email: '',
      password: '',
      confirmpassword: ''
    }
  }
  handleSubmit = async e =>{
    e.preventDefault();
    try{
      if (this.state.form.password == this.state.form.confirmpassword){
        let data ={
          email: this.state.form.email,
          password: this.state.form.password,
        }
        let response = await api.user.register(data)
        if (response.created !== true){
          this.setState({error: response.error})
        }else{
          alert(response.message)
          this.setState({load: true})
        }
      }else{
        this.setState({error: 'Contraseña no coincide'})
      }
    }catch (error){
      this.setState({error: error})
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
      return <Navigate to="/login" />
    }


    return(
      <>
        <Nav />
        <div className='container__all'>
          <div className='row'>
            <div className='col offset-4'>  
              <div className='container__formLogin'>
                <FormRegister 
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    formValues={this.state.form}
                    error={this.state.error}
                />
              </div>
              <h2 className='registro'>Ya tienes cuenta? Ingresa <Link className='linkRegisrar' to='/login'>aqui</Link></h2>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Register