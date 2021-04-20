import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ChipBar from '../components/ChipBar';
import ChipList from '../components/ChipList';
import TypeBar from '../components/TypeBar';

const Data = () => {
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
};

export default Data;