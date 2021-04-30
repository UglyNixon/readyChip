import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row, Table } from 'react-bootstrap';

import {useParams} from 'react-router-dom';
import { fetchOneChip, fetchTypes } from '../http/chipApi';

const Chip = () => {
   const [chip,setChip] = useState({defect:[]});
   const [type,setType] = useState('')
   const [version,setVersion] = useState('')
   const {id} = useParams();
   useEffect(()=>{
    fetchOneChip(id).then(data=>setChip(data))
    .then(()=>fetchTypes(id))
    // .then(data=>console.log(data))
    .then(data=>setType(data[0]))
    
   },[])
   
    return (
      <Container className='mt-5 '>
        <Container className='d-flex'>
        <Col md={3}>
          <Image src={process.env.REACT_APP_API_URL+type.img} style={{width:150}}/>
        </Col>

       <Col md={9}>
        <Row className='m-auto' className='justify-content-center'> Виды несоответствия:</Row>
       <Table striped bordered hover variant="dark" className='mt-1'>
  <thead>
  <tr >
        <th>Код ошибки</th>
        {chip.defect.map(info=>
        <th key={info.id} className='justify-content-center' style ={{textAlign:'center'}}>{info.code}</th>)}
    </tr> 
   
  </thead>
  <tbody>
 
     <tr>
     <td>Кол-во по журналу</td>
       {chip.defect.map(info=>
  
        <td key={info.id} className='justify-content-center 'style ={{textAlign:'center'}}>{info.value}</td>
        
        )}</tr>
        <tr>
          <td>Кол-во реальное</td>
          {chip.defect.map(info=> 
  
        <td key={info.id} className='justify-content-center 'style ={{textAlign:'center'}}>{info.realValue}</td>

  )}
        </tr>
  </tbody>
</Table>
      </Col>
      </Container>
      <Container>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>/</th>
      <th>Данные</th>
      <th>Кол-во</th>
   

    </tr>
    
  </thead>
  <tbody>
  
   
    <tr>
    <td>Приход</td>
    </tr>
    <tr>
    <td>Расход</td>
    </tr>
    <tr>
    <td>Брак</td>
    </tr>
    
    
    
  </tbody>
</Table>

      </Container>
      </Container>
    );
};

export default Chip;