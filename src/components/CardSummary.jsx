import React from 'react';

const CardSummary = ({value,label}) => {
    return (
        <div className='bg-[#FFFFFF] px-6 py-8 text-center shadow-sm ring-1 ring-slate-200/70 rounded-sm'>
            <h3 className='text-4xl font-bold text-[#244D3F] md:text-5xl'>{value}</h3>
            <p className='mt-3 text-[#64748B] font-medium'>{label}</p>
        </div>
    );
};

export default CardSummary;