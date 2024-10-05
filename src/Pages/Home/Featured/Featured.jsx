import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImage from '../../../assets/home/featured.jpg';
import './Featured.css';


const Featured = () => {
    return (
        <section className='featuredItem pt-10 mb-5 bg-fixed text-white'>
            <SectionTitle heading={'from our menu'} subHeading={'check it out'}></SectionTitle>
            <div className='md:flex justify-center items-center pb-20 pt-10 px-36 text-black '>
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className='md:ml-20'>
                    <p>Aug 20 2025</p>
                    <h2 className='uppercase'>WHERE CAN I GET SOME?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn btn-outline border-0 border-b-6'>Read More</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;