import React, { useEffect, useState } from 'react';
import Categories from '../Categories/Categories';
import RelatedNews from '../../RelatedNews/RelatedNews';

const LeftNav = () => {
    const [sports, setSports] = useState([]);
    useEffect(() => {
        fetch('https://the-dragon-news-server-j5xx3eywh-armans-projects-cd84b623.vercel.app/sports')
            .then(res => res.json())
            .then(data => setSports(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <Categories />
            <div className='d-flex flex-column gap-4'>
                {
                    sports.map(sport => <RelatedNews key={sport._id} news={sport}></RelatedNews>)
                }
            </div>
        </div>
    );
};

export default LeftNav;