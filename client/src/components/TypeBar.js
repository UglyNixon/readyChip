import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Context } from '../index';

const TypeBar = observer(() => {
    const {chip}=useContext(Context)
    return (
    <ListGroup>
        {chip.types.map(type=>
        <ListGroup.Item
         style={{cursor:'pointer'}}
         active={type.id === chip.selectedType.id}
         key={type.id} 
         onClick={()=>chip.setSelectedType(type)}>
            {type.name} </ListGroup.Item>
            )}
      </ListGroup>
    );
})

export default TypeBar;