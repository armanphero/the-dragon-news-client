import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const TrendingNews = ({ singleNews }) => {
    // console.log(singleNews);
    const { image_url, author, title, total_view, _id, rating, details, newsCategory } = singleNews;
    return (
        <div>
            <Card>
                <Card.Body className='p-0'>
                    <div className='trending-news-header p-3 position-relative'>
                        <Badge bg="warning" text="dark" className='position-absolute top-0 end-0'>{newsCategory}</Badge>
                        <div className='author'>
                            <img src={author.img} alt="" />
                            <div>
                                <h6>{author.name}</h6>
                                <span>{author.published_date}</span>
                            </div>
                        </div>
                        <div>
                            <FaRegBookmark className='me-2' role="button" />
                            <FaShareAlt role="button" />
                        </div>
                    </div>
                    <div className='p-3'>
                        <Card.Title>{title}</Card.Title>
                        <Card.Img variant="top" src={image_url} className='my-3' />
                        {details.length > 400 ?
                            <div>
                                <p>{details.slice(0, 400)}...</p>
                                <Link to={`/news/${_id}`} className='text-danger text-decoration-none'>Read More</Link>
                            </div> :
                            details}
                    </div>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex gap-2 align-items-center'>
                        <div className='text-danger'>
                            {/* <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar /> */}
                            <Rating
                                placeholderRating={rating.number}
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                                readonly
                            />
                        </div>
                        <span>{rating.number}</span>
                    </div>
                    <div>
                        <FaEye className='me-2' />
                        <span>{total_view ? total_view : 0}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default TrendingNews;