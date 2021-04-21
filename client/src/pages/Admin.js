import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateChip from '../components/modalPage/CreateChip';
import CreateType from '../components/modalPage/CreateType';
import CreateVersion from '../components/modalPage/CreateVersion';

const Admin = () => {
    const [versionVisible,setVersionVisible] = useState()
    const [typeVisible,setTypeVisible] = useState()
    const [chipVisible,setChipVisible] = useState()
    return (
        <Container className="d-flex flex-column">
            <Button variant='outline-dark' className='mt-2 p-3' onClick={()=>setChipVisible(true)}>Добавить серию платы</Button>
            <Button variant='outline-dark' className='mt-2 p-3' onClick={()=>setVersionVisible(true)}>Добавить версию платы</Button>
            <Button variant='outline-dark' className='mt-2 p-3' onClick={()=>setTypeVisible(true)}>Добавить тип платы</Button>
            <CreateType  show={typeVisible} onHide={()=>setTypeVisible(false)}/>
            <CreateVersion show={versionVisible} onHide={()=>setVersionVisible(false)}/>
            <CreateChip show={chipVisible} onHide={()=>setChipVisible(false)}/>
        </Container>
    
    );
};

export default Admin;