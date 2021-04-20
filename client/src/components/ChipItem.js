import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';

const ChipItem = ({chip}) => {
    return (
       <Col md={3}>
            <Card  
            style={{width:150,cursor:'pointer'}}
            border={'light'}
            >
            <Image style={{width:150,height:150}} src={chip.img}></Image>

            </Card>
       </Col>
    );
};

export default ChipItem;