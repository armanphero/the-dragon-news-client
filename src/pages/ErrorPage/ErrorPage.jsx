import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {data, status} = useRouteError();
    console.log(data);
    return (
        <div className='container my-5 text-danger text-center'>
            <h5>{data}</h5>
            <h1>{status}</h1>
        </div>
    );
};

export default ErrorPage;