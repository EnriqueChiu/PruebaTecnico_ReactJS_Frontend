import React, { useEffect, useState  } from 'react'
import Modal from "react-bootstrap/Modal";
import './styles/FormProducto.css'

function FormProducto(props) {
  
  const [show, setshow] = useState(false);

  const handleClose = () => {
    setshow(false)
  };
  
  const handleShow = () => {
    setshow(true)
  };
  
  
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col offset-4'>
            <button className='home_register' onClick={handleShow}>Registrar producto</button>
          </div>
        </div>
      </div>
      <Modal  size="xl" show={show} onHide={handleClose}>
        <div className='container__modal'>
        <Modal.Body>
          <form onSubmit={props.onSubmit}>
            <div className='form__input'>
              <label><h3 className='text-white'>Nombre de Producto</h3></label>
              <input className='form-control' type='text' name='nombre' onChange={props.onChange} value={props.formValues.nombre}/>
            </div>
            <div className='form__input'>
              <label><h3 className='text-white'>Prueba imagen</h3></label>
              <input className='form-control' type='file' name='imagen' onChange={props.onChange} value={props.formValues.imagen}/>
            </div>
            <div className='form__input'>
              <label><h3 className='text-white'>Artesano de producto</h3></label>
              <input className='form-control' type='text' name='artesano' onChange={props.onChange} value={props.formValues.artesano}/>
            </div>
            <div className='form__input'>
              <label><h3 className='text-white'>Precio de producto</h3></label>
              <input className='form-control' type='number' name='precio' onChange={props.onChange} value={props.formValues.precio}/>
            </div>
            <div className='form__input'>
              <label><h3 className='text-white'>Sku de producto</h3></label>
              <input className='form-control' type='text' name='sku' onChange={props.onChange} value={props.formValues.sku}/>
            </div>
          <Modal.Footer>
            <button className='btn btn-secondary' onClick={handleClose}>
              <h3>Cancelar</h3>
            </button>
          <button className='btn btn-primary ms-5' onClick={handleClose}>
            <h3>Registrar</h3>
          </button>
        </Modal.Footer>
        </form>
      </Modal.Body>
      </div>
    </Modal>
  </>
  )
}

export default FormProducto