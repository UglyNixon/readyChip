import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Card, Row } from 'react-bootstrap';
import { Context } from '../index';

const ChipBar = observer(() => {
    const {chip}=useContext(Context)
    return (
     <Row
     className='d-flex'
     >
         {chip.versions.map(ver=>
            <Card 
            key={ver.id}
            border={ver.id===chip.selectedVersion.id ? "danger" : 'light'}
            style={{cursor:'pointer'}}
            onClick={()=>chip.setSelectedVersion(ver)}
            className='p-2'>
                {ver.name}
            </Card>
            )}


     </Row>
    );
})

export default ChipBar;