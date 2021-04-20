import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { Context } from '../index';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import TypeBar from '../components/TypeBar';
import { fetchBrands } from '../http/brandApi';
import { fetchDevice, fetchTypes } from '../http/deviceApi';

const Shop = observer(() => {
    const {device}=useContext(Context)


    useEffect(()=>{
        fetchTypes().then(data=>{device.setTypes(data)})
        fetchBrands().then(data=>{device.setBrands(data)})
        fetchDevice().then(data=>{device.setDevice(data.rows)})
    },[])
    return (
       <Container>
           <Row className='mt-2'>
               <Col md={3}>
                <TypeBar></TypeBar>
               </Col>
               <Col md={9}>
                   <BrandBar></BrandBar>
                   <DeviceList></DeviceList>
                </Col>
           </Row>
       </Container>
    );
})

export default Shop;