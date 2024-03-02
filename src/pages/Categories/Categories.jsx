import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Categories = () => {
    const [categoriesData, setCategoriesData] = useState([]);

    useEffect(() => {
        fetch('https://the-dragon-news-server-j5xx3eywh-armans-projects-cd84b623.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategoriesData(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h4 className='fs-5 font-semibold mb-3'>All Caterogy</h4>
            {/* <div className='d-flex justify-content-center'> */}
            <div className='d-flex flex-column gap-1'>
                {
                    categoriesData.map(category => <NavLink to={`/category/${category.id}`} key={category.id} className={({ isActive }) => isActive ? 'bg-gray text-secondary font-bold fs-5 text-decoration-none rounded py-2 px-5' : 'text-secondary font-bold fs-5 text-decoration-none rounded py-2 px-5'}>{category.name}</NavLink>)
                }
            </div>
            {/* </div> */}
        </div>
    );
};

export default Categories;