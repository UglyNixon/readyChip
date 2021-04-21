
import React, { useContext, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../../index';
const CreateChip = ({show,onHide}) => {
    const {chip} = useContext(Context)
    const [defec,setDefec]=useState([])

    const addDefec =()=>{
        setDefec([...defec,{code:'',value:'',realValue:'',number:Date.now()}])
    }
    const removeDefec=(number)=>{
        setDefec(defec.filter(i=>i.number!==number))
    }

    return (
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Добавьте новый тип
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Dropdown className='mt-3'>
                <Dropdown.Toggle>Выберите тип платы</Dropdown.Toggle>
                <Dropdown.Menu>
                    {chip.types.map(type=>
                        <Dropdown.Item key={type.id}>
                           {type.name}
                        </Dropdown.Item>
                        
                        )}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='mt-3'>
                <Dropdown.Toggle>Выберите версию платы</Dropdown.Toggle>
                <Dropdown.Menu>
                    {chip.versions.map(type=>
                        <Dropdown.Item key={type.id}>
                           {type.name}
                        </Dropdown.Item>
            
                        )}
                </Dropdown.Menu>
            </Dropdown>
            <Form.Control className='mt-3' placeholder='Серия платы....'/>
            <Form.Control className='mt-3' placeholder='Приход...' type ='number'/>
            <Form.Control className='mt-3' placeholder='Расход...' type ='number'/>
            <hr/>
            <Button variant='outline-dark' onClick={addDefec}> добавить брак</Button>
            {defec.map(d=>
                <Row key={d.number} className=" mt-2">
                    
                    <Col md={2}>
                        <Form.Control placeholder='код'/>
                    </Col>
                    <Col md={3}>
                    <Form.Control placeholder='кол-во по журналу'/>
                    </Col>
                    <Col md={3}>
                    <Form.Control placeholder='реальное кол-во'/>
                    </Col>
                    <Button variant='outline-danger' onClick={()=>removeDefec(d.number)}>Удалить характеристику</Button>
                </Row>
                )}
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-danger' onClick={onHide}>закрыть</Button>
          <Button variant='outline-succes' onClick={onHide}>добавить</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default CreateChip;