const BASE_URL = 'http://localhost:8000';



async function callApi(endpoint, options={}){
  const token = localStorage.getItem('token')

  if (token === null){
    options.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  }else{
    options.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token
    }
  }
  console.log(options)

  const url = BASE_URL + endpoint;
  console.log(url)
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}



const api = {
  user:{
    login(data){
      return callApi('/modulo/Login/',{
        method: 'POST',
        body: JSON.stringify(data)
      });
    },
    register(data){
      return callApi('/modulo/Registro/',{
        method: 'POST',
        body: JSON.stringify(data)
      })
    },
  },
  create:{
    producto(data){
      return callApi('/modulo/RegistrarProducto/',{
        method: 'POST',
        body: JSON.stringify(data)
      })
    }
  },
  producto:{
    comprar(data){
      return callApi('/modulo/ComprarProducto',{
        method: 'POST',
        body: JSON.stringify(data)
      })
    },
    completar(data){
      return callApi('/modulo/CompletarPedido',{
        method: 'POST',
        body: JSON.stringify(data)
      })
    }
  },
  getData:{
    producto(){
      return callApi('/modulo/ObtenerProducto',{
        method: 'GET'
      })
    }
  },
  token:{
    create(){
      return callApi('/api/token/', {
        method: 'POST',
        body: JSON.stringify({
          username: 'JEC',
          password: 'admin123'
        })
      })
    }
  }
}

export default api;