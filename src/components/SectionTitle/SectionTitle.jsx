import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='text-center md:w-1/3 mx-auto my-3'>
            <p className='border-b-4 text-yellow-600'>-------{subHeading}-------</p>
            <h1 className='text-2xl border-b-4 p-3'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;