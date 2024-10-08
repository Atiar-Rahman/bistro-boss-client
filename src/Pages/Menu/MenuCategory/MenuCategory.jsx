import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items,title, coverImage }) => {
    return (
        <div className='p-10'>
            {
                title && <Cover img={coverImage} title={title}></Cover>
            }
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-5'>
                {
                    items.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;