import React from 'react';
import { Card } from 'react-bootstrap';
import { CiCalendarDate } from "react-icons/ci";
import { Link } from 'react-router-dom';

const RelatedNews = ({ news }) => {
    // console.log(news);
    const { image_url, title, newsCategory, author, _id } = news;
    return (
        <Link to={`/news/${_id}`} className='text-decoration-none'>
            <Card className='border-0'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body className='p-0 my-2'>
                    <Card.Title className='fs-6'>{title}</Card.Title>
                </Card.Body>
                <Card.Footer className='border-0 bg-white p-0'>
                    <div className='d-flex justify-content-between'>
                        <span>{newsCategory}</span>
                        <div>
                            <CiCalendarDate />
                            <span className='ms-2'>{author.published_date}</span>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </Link>
    );
};

export default RelatedNews;