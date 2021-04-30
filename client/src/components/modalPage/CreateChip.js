
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { createChip, fetchTypes, fetchVersions } from '../../http/chipApi';
import { Context } from '../../index';
const CreateChip = observer(({show,onHide}) => {
    const {chip} = useContext(Context)
   

    const addDefec =()=>{
        setDefec([...defec,{code:'',value:'',realValue:'',number:Date.now()}])
    }
    const removeDefec=(number)=>{
        setDefec(defec.filter(i=>i.number!==number))
    }
    useEffect(()=>{
        fetchTypes().then(data=>chip.setTypes(data))
        fetchVersions().then(data=>chip.setVersions(data))
       
    },[])
    const [series,setSeries]=useState('')
    const [coming,setComing]=useState(0)
    const [consum,setConsum]=useState(0)
    const [defec,setDefec]=useState([])
   const changeDefec = (key,value,number)=>{
     setDefec(defec.map(i=>i.number===number ? {...i,[key]:value}:i))
   }
   const addChip=()=>{
     const formData = new FormData()
     formData.append ('series',series)
     formData.append ('coming',`${coming}`)
     formData.append ('consum',`${consum}`)
     formData.append ('typeId',chip.selectedType.id)
     formData.append ('versionId',chip.selectedVersion.id)
     formData.append ('defec',JSON.stringify(defec))
    createChip(formData).then(data=>onHide())
   
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
                <Dropdown.Toggle>{chip.selectedType.name || `Выберите тип платы`}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {chip.types.map(type=>
                        <Dropdown.Item
                        key={type.id} 
                        onClick={()=>chip.setSelectedType(type)}
                        >
                           {type.name}
                        </Dropdown.Item>
                        
                        )}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='mt-3'>
                <Dropdown.Toggle>{chip.selectedVersion.name || `Выберите тип платы`}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {
                    
                    chip.versions.filter(v=>v.typeId===chip.selectedType.id).map(type=>
                        <Dropdown.Item 
                        key={type.id}
                        onClick={()=>chip.setSelectedVersion(type)}
                        >
                           {type.name}
                        </Dropdown.Item>
            
                        )}
                </Dropdown.Menu>
            </Dropdown>
            <Form.Control className='mt-3'
             value={series} onChange={e=>setSeries(e.target.value)}
               placeholder='Серия платы....'
               />
            <Form.Control className='mt-3'
             value={coming} onChange={e=>setComing(Number(e.target.value))}
               placeholder='Приход...' type ='number'
               />
            <Form.Control className='mt-3'
             value={consum} onChange={e=>setConsum(Number(e.target.value))}
               placeholder='Расход...' type ='number'
               />
            <hr/> 
            <Button variant='outline-dark' onClick={addDefec}> добавить брак</Button>
            {defec.map(d=>
                <Row key={d.number} className=" mt-2">
                    
                    <Col md={2}>
                        <Form.Control 
                        value={d.code}
                        onChange={(e)=>changeDefec('code',e.target.value,d.number)}
                        placeholder='код'/>
                    </Col>
                    <Col md={3}>
                    <Form.Control 
                        value={d.value}
                        onChange={(e)=>changeDefec('value',e.target.value,d.number)}
                    placeholder='кол-во по журналу'/>
                    </Col>
                    <Col md={3}>
                    <Form.Control 
                    value={d.realValue}
                    onChange={(e)=>changeDefec('realValue',e.target.value,d.number)}
                    placeholder='реальное кол-во'/>
                    </Col>
                    <Button variant='outline-danger' onClick={()=>removeDefec(d.number)}>Удалить характеристику</Button>
                </Row>
                )}
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-danger' onClick={onHide}>закрыть</Button>
          <Button variant='outline-succes' onClick={addChip}>добавить</Button>
        </Modal.Footer>
      </Modal>
    );
})

export default CreateChip;