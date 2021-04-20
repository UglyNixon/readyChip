import React from 'react';
import { Col, Container, Image, Row, Table } from 'react-bootstrap';

const Chip = () => {
    const chip = {id:1,series:'50292',coming:20000,consum:18000,img:'https://krasn.diamarka.com/upload/iblock/106/10695dbf27334116c90636b66796be8b.jpg'}
    const defec=[
        {id:1,code:1,value:10,realValue:10},
        {id:2,code:2,value:20,realValue:20},
        {id:3,code:3,value:30,realValue:30},
        {id:4,code:4,value:40,realValue:40},
        {id:5,code:5,value:50,realValue:50},
    ]
    return (
      <Container className='mt-5 d-flex'>
      <Col md={3}>
          <Image src={chip.img} style={{width:150,height:150}}/>
      </Col>

      <Col md={9}>
        <Row className='m-auto' className='justify-content-center'> Виды несоответствия:</Row>
      <Table striped bordered hover variant="dark" className='mt-1'>
  <thead>
  <tr >
        {defec.map(info=>
        <th key={info.id} className='justify-content-center'>{info.code}</th>)}
    </tr> 
   
  </thead>
  <tbody>
 
     <tr>{defec.map(info=>
        <td key={info.id} className='justify-content-center'>{info.value}</td>
        
        )}</tr>
  </tbody>
</Table>
      </Col>
      </Container>
    );
};

export default Chip;