import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {

    // const [menu,setMenu] = useState([]);

    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItems = data.filter(item=>item.category === 'popular');
    //         setMenu(popularItems);
    //     })
    // },[])

    const [menu] = useMenu();
    const popular = menu.filter(item=>item.category === 'popular');

    return (
        <section>
            <SectionTitle heading={'From our menu'} subHeading={'checkout'}></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-5'>
                {
                    popular.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <button className='btn btn-outline border-0 border-b-6'>View Full Menu</button>
        </section>
    );
};

export default PopularMenu;