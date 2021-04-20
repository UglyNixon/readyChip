
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Image ,Row,Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import star from '../assets/bigStar.png'
import { fetchOneDevice } from '../http/deviceApi';
const Device = () => {
const [device,setDevice]=useState({info:[]})
const {id}= useParams()

  useEffect(()=>fetchOneDevice(id).then(data=>
    setDevice(data)),[])
    

    return (
      <Container className='mt-5'>
    <Row>
        <Col md={4}>
            <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
        </Col>
        <Col md={4} className='d-flex flex-column'>
            <Row>
                <h2 >{device.name}</h2>
                <div
                className='d-flex align-items-center justify-content-center'
                style={{background: `url(${star}) no-repeat center center`,width:240,height:240,backgroundSize:'cover',color:'yellow',fontSize:'3.4em'}}
                >
                    {device.rating}
                </div>
            </Row>
        </Col>
        <Col md={4}>
            <Card
            className='d-flex flex-column align-items-center justify-content-around'
            style={{width:240,height:240,fontSize:32,border:'5px solid rgb(55 48 48 / 30%)'
            }}
            >
                <h3>От: {device.price} Руб.</h3>
                <Button variant='outline-dark'>Добавить в корзину</Button>
            </Card>
        </Col>
        </Row>
        <Row className='d-flex flex-column m-3'>
            {device.info.map((info,i)=>
                <Row key={info.id} style={{background:i%2 ===0? "lightgray":'transparent' ,padding:10}}>
                    {info.title}: {info.description}
                </Row>
                
                )}
        </Row>
      </Container>
    );
};

export default Device;