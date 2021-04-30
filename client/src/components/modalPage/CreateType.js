import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { createType } from '../../http/chipApi';

const CreateType = ({show,onHide}) => {
  const [value,setValue] =useState('')
  const addType =()=> {
    const formData = new FormData();
    formData.append('img',file)
    formData.append('name',value)
    createType(formData).then(data=>setValue(''))
    onHide()
  }
  const [file,setFile] = useState(null)
  const selectedFile=e=>{
    setFile(e.target.files[0])
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
            <Form.Control 
            value={value}
            onChange={e=>setValue(e.target.value)}
            placeholder='Введите название нового типа...'/>
            <Form.Control
            className='mt-3'
            type='file'
              onChange={selectedFile}
            />
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-danger' onClick={onHide}>закрыть</Button>
          <Button variant='outline-succes' onClick={addType}>добавить</Button>
        </Modal.Footer>
      </Modal>
  );
}
export default CreateType;