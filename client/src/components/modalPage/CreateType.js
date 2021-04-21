import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const CreateType = ({show,onHide}) => {
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
            <Form.Control placeholder='Введите название нового типа...'/>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-danger' onClick={onHide}>закрыть</Button>
          <Button variant='outline-succes' onClick={onHide}>добавить</Button>
        </Modal.Footer>
      </Modal>
  );
}
export default CreateType;