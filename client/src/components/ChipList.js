import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { fetchAllChip } from '../http/chipApi';
import { Context } from '../index';
import ChipItem from './ChipItem';

const ChipList = observer(() => {
    const {chip}=useContext(Context);
    return (
        <Row
        className='d-flex'
        >
            {chip.chips.map(chip=>
                <ChipItem key={chip.id} chip={chip}/>
                )}
        </Row>
    );
})

export default ChipList;