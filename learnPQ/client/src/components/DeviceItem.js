import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import star from '../assets/star.png'
import { DEVIVE_ROUTE } from '../utils/consts';

const DeviceItem = ({device}) => {
    const history = useHistory()
    
    return (

        <Col md={3} className="mt-3" onClick={()=>history.push(DEVIVE_ROUTE+'/'+device.id)}>
        <Card style={{width:150,cursor:'pointer'}}>
         <Image src={process.env.REACT_APP_API_URL+device.img} width={150} height={150}/>
        <div className='d-flex justify-content-between mt-2'>

                <div className="text-black-50"> Samsung...</div>
                <div className='d-flex align-items-center'>
                     <div>{device.rating}</div>
                     <Image width={15} height={15} src={process.env.REACT_APP_API_URL+device.img}/>
                </div>
              
        </div>
        <div>
                    {device.name}
        </div>
        </Card>
        </Col>
    );
};

export default DeviceItem;