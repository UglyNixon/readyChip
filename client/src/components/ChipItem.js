import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { CHIP_ROUTE } from '../utils/consts';

const ChipItem = ({chip}) => {
    const history=useHistory()
    
    return (
       <Col md={3}>
            <Card  
            style={{width:150,cursor:'pointer'}}
            border={'black'}
            className='mt-3 p-3'
            onClick={()=>history.push(CHIP_ROUTE+'/' + chip.id)} 
            >
           {/*    src={chip.img} procces.env.REACT_APP_API_URL + chip.img  */}
            <Image style={{width:100,height:150}} src={chip.img} className='align-self-center'/> 
            <div>
                <div>Серия:{chip.series}</div>
                <div>Тип:</div>
                <div>Версия:</div>
                <div>Приход:</div>
                <div>Расход:</div>
                <div className='d-flex'>
                <div>Брак:</div>
                <div>% </div>
                </div>
            </div>
            </Card>
       </Col>
    );
};

export default ChipItem;