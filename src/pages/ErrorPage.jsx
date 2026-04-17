import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center text-center'>
      <h1 className='text-8xl font-bold text-green-700'>4<span className='text-red-700'>0</span>4</h1>
      <p className='mt-4 text-lg text-slate-500'>Oops!!!!!!!!!!!
        <br />
        Page not found.
      </p>
      <Link to="/"
      className='mt-6 rounded-xl bg-[#244D3F] text-white p-2'>
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;