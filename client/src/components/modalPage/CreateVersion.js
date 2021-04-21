import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
const CreateVersion = ({show,onHide}) => {
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
            <Form.Control placeholder='Введите название новой версии платы...'/>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-danger' onClick={onHide}>закрыть</Button>
          <Button variant='outline-success' onClick={onHide}>добавить</Button>
        </Modal.Footer>
      </Modal>


    );
};

export default CreateVersion;