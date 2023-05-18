import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import api from '../service/Api';
import { useNavigate } from 'react-router-dom';
import './styles/Cards.css'

function CardsPedidos(props) {
  const [producto, setproducto] = useState([]);
  
  let navigate = useNavigate()
  useEffect(()=>{
    (async () => {
      const data = await api.getData.producto()
      if (data.detail !== undefined){
        alert(data.detail)
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        navigate('/login')
      }else{
        setproducto(data);
      }
    })();
  }, [])


  return (
    <Row xs={1} md={4} className="g-5">
      {producto.map((idx) => (
        <>
          {
            idx.pedidos == true
            ?
            <>
              <Col key={idx.sku}>
                <Card
                  bg = 'dark'
                  text = 'light'
                  style={{ width: '23rem' }}
                >
                  <Card.Img className='CarImg' variant="top" src={idx.imagen} />
                  <Card.Body>
                    <Card.Title>{idx.nombre}</Card.Title>
                    <Card.Text>
                      Precio: Q.{idx.precio}
                    </Card.Text>
                    <div className="d-grid gap-2">
                      <button className='btn btn-success btn-lg' value={idx.id} onClick={props.comprar}>Comprar</button>{' '}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </>
            :
            <></>
          }
        </>
      ))}
    </Row>
  )
}

export default CardsPedidos