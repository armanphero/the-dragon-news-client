import React, { useContext, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Navigate, useLoaderData } from 'react-router-dom';
import RightNav from '../RightNav/RightNav';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import RelatedNews from '../../RelatedNews/RelatedNews';
import { AuthContext } from '../../authProvider/authProvider';
import { NewsDetailsContext } from '../../PrivateRoute/PrivateRoute';

const NewsDetails = () => {
    const { detailNews, similarAuthorArticles } = useContext(NewsDetailsContext);
    const { details, _id, image_url, title } = detailNews;


    return (
        <div className='container'>
            <Row>

                <Col lg={9}>
                    <Card className='p-3'>
                        <Card.Img variant="top" src={image_url} />
                        <Card.Body>
                            <Card.Title className='fs-3 font-bold'>{title}</Card.Title>
                            <Card.Text>{details}</Card.Text>
                            <div>
                                <button className='btn btn-danger'><FaLongArrowAltLeft /> All news in this category</button>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className='d-flex gap-5 mt-5'>
                        {
                            similarAuthorArticles.map(news => <RelatedNews key={news._id} news={news}></RelatedNews>)
                        }
                    </div>
                </Col>

                <Col>
                    <RightNav />
                </Col>
            </Row>
        </div>
    );
};

export default NewsDetails;