import React, { useContext, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../../index';

const CreateDevice = ({show,onHide}) => {
    const {device} = useContext(Context)
    const [info,setInfo]=useState([])

    const addInfo=()=>{
        setInfo([...info,{title:'',discription:'',number:Date.now()}])
    }
    const removeInfo=(number)=>{
        setInfo(info.filter(i=>i.number!==number))
    }
    return (
        <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
      Добавить Устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
           <Dropdown className="mt-2 ml-3">
            <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
           <Dropdown.Menu>
               {device.types.map(type=>
               <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
               )}
           </Dropdown.Menu>
           </Dropdown>
           <Dropdown className="mt-2 ml-3">
            <Dropdown.Toggle>Выберите Брэнд</Dropdown.Toggle>
           <Dropdown.Menu>
               {device.brands.map(type=>
               <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
               )}
           </Dropdown.Menu>
           </Dropdown>
                <Form.Control className='mt-3' placeholder="Введите название утсройства" ></Form.Control>
                <Form.Control className='mt-3' placeholder="Введите cтоимость утсройства" type ='number'></Form.Control>
                <Form.Control className='mt-3' type='file'></Form.Control>
                <hr/>
                <Button
                variant="outline-dark"
                    onClick={addInfo}
                >Добавить новое свойство
                </Button>
                {info.map(i=>
                    <Row key={i.number} className='mt-3'> 
                        <Col md={4}>
                            <Form.Control 
                            placeholder='Введите название характирисики'
                            >
                            </Form.Control>
                        </Col>
                        <Col md={4}>
                            <Form.Control 
                            placeholder='Введите описание характеристики'
                            >
                            </Form.Control>
                        </Col>
                        <Col md={4}>
                          <Button variant='outline-danger' onClick={()=>removeInfo(i.number)}> Удалить</Button>
                        </Col>
                    </Row>
                    )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-red' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
    );
};

export default CreateDevice;