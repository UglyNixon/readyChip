import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/models/CreateBrand';
import CreateDevice from '../components/models/CreateDevice';
import CreateType from '../components/models/CreateType';

const Admin = () => {
    const [brandVisible,setBrandVisible]=useState(false)
    const [typeVisible,setTypeVisible]=useState(false)
    const [deviceVisible,setDeviceVisible]=useState(false)
    return (
     <Container className="d-flex flex-column">
         <Button variant='outline-dark' className='mt-2' onClick={()=>setBrandVisible(true)}>Добавить Бренд</Button>
         <Button variant='outline-dark' className='mt-2' onClick={()=>setTypeVisible(true)}>Добавить тип</Button>
         <Button variant='outline-dark' className='mt-2' onClick={()=>setDeviceVisible(true)}>Доваить устройство</Button>
         <CreateBrand show={brandVisible} onHide={()=>setBrandVisible(false)}></CreateBrand>
         <CreateType show={typeVisible}  onHide={()=>setTypeVisible(false)}></CreateType>
         <CreateDevice show={deviceVisible} onHide={()=>setDeviceVisible(false)}></CreateDevice>
     </Container>
    );
};

export default Admin;