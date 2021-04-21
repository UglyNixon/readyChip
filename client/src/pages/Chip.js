import React from 'react';
import { Col, Container, Image, Row, Table } from 'react-bootstrap';

const Chip = () => {
    const chip = {id:1,series:'50292',coming:20000,consum:18000,img:'https://krasn.diamarka.com/upload/iblock/106/10695dbf27334116c90636b66796be8b.jpg'}
    const defec=[
        {id:1,code:1,value:10,realValue:11},
        {id:2,code:2,value:20,realValue:21},
        {id:3,code:3,value:30,realValue:31},
        {id:4,code:4,value:40,realValue:41},
        {id:5,code:5,value:50,realValue:51},
    ]
    return (
      <Container className='mt-5 '>
        <Container className='d-flex'>
        <Col md={3}>
          <Image src={chip.img} style={{width:150,height:150}}/>
        </Col>

       <Col md={9}>
        <Row className='m-auto' className='justify-content-center'> Виды несоответствия:</Row>
       <Table striped bordered hover variant="dark" className='mt-1'>
  <thead>
  <tr >
        <th>Код ошибки</th>
        {defec.map(info=>
        <th key={info.id} className='justify-content-center' style ={{textAlign:'center'}}>{info.code}</th>)}
    </tr> 
   
  </thead>
  <tbody>
 
     <tr>
     <td>Кол-во по журналу</td>
       {defec.map(info=>
  
        <td key={info.id} className='justify-content-center 'style ={{textAlign:'center'}}>{info.value}</td>
        
        )}</tr>
        <tr>
          <td>Кол-во реальное</td>
          {defec.map(info=> 
  
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