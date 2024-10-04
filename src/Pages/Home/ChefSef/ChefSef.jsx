import React, { useEffect, useState } from 'react';
import ChefRecom from '../../Shared/ChefRecom/ChefRecom';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const ChefSef = () => {
    const [chef,setChef] = useState([]);

    useEffect(()=>{
        fetch("chefsef.json")
        .then(res=>res.json())
        .then(data=>setChef(data))
    },[])


    return (
        <div className='my-5'>
            <SectionTitle heading={'chef Recommends'} subHeading={'should try'}></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                chef.map(sef=><ChefRecom key={sef._id} sef={sef}></ChefRecom>)
            }
        </div>
        </div>
    );
};

export default ChefSef;