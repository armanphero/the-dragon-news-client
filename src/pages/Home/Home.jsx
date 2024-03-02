import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MainContent from '../MainContent/MainContent';
import RightNav from '../RightNav/RightNav';
import LeftNav from '../LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container'>
            <Row>
                <Col md={3}>
                    <LeftNav/>
                </Col>

                <Col md={9} lg={6}>
                    <Outlet />
                </Col>

                <Col>
                    <RightNav />
                </Col>
            </Row>
        </div>
    );
};

export default Home;