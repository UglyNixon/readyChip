import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context } from '..';
import ChipBar from '../components/ChipBar';
import ChipList from '../components/ChipList';
import TypeBar from '../components/TypeBar';
import { fetchTypes,fetchVersions } from '../http/chipApi';

const Data = observer(() => {
    const {chip}=useContext(Context)
    useEffect(()=>{
fetchTypes().then(data=>chip.setTypes(data))
fetchVersions().then(data=>chip.setVersions(data))
    })

    return (
        <Container>
            <Row className='mt-3'>
                <Col md={3}>
                <TypeBar/>
                </Col>
                <Col md={9}>
                    <ChipBar/>
                    <ChipList/>
                </Col>
            </Row>

        </Container>
    );
})

export default Data;