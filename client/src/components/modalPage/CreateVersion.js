import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import { Context } from '../..';
import { createVersion, fetchTypes } from '../../http/chipApi';
const CreateVersion = observer(({show,onHide}) => {
  const {chip} = useContext(Context);
  useEffect(()=>{
    fetchTypes().then(data=>chip.setTypes(data))   
},[])

  const [value,setValue]=useState('')
  const [file,setFile] = useState(null)
  const selectedFile=e=>{
    setFile(e.target.files[0])
  }
const addVersion= ()=>{
  const formData = new FormData();
  formData.append('name', value)
  formData.append('img', file)
  formData.append('typeId',chip.selectedType.id)
  createVersion(formData).then(data=>onHide())
  onHide();
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
            Добавьте новую версию
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
            <Form.Control 
            value={value}
            onChange={e=>setValue(e.target.value)}
            className='mt-3'
            placeholder='Введите название новой версии платы...'/>
            <Form.Control
            className='mt-3'
        type='file'
        onChange={selectedFile}
            />
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-danger' onClick={onHide}>закрыть</Button>
          <Button variant='outline-success' onClick={addVersion}>добавить</Button>
        </Modal.Footer>
      </Modal>


    );
})

export default CreateVersion;