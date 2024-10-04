import React from 'react';

const MenuItem = ({item}) => {
    const {name,recipe,image,price} = item;
    return (
        <div className='flex space-x-3'>
            <img className='w-[104px] rounded-b-full rounded-r-full' src={image} alt="" />
            <div>
                <h1 className='uppercase'>{name}--------------</h1>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItem;