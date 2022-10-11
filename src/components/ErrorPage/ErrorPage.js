import React from 'react';

const ErrorPage = () => {
    return (
        <div className='mt-14'>
            <h2 className='text-5xl text-red-400'>Route Is Not Found 404</h2>
            <p className='text-2xl mt-8 bg-slate-300'>Please enter a valid url !!!</p>
        </div>
    );
};

export default ErrorPage;