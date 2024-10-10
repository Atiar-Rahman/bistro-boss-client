import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ChefService from '../ChefService/ChefService';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Contact from '../../../components/Contact/Contact';
import ChefSef from '../ChefSef/ChefSef';
import Testimonial from '../Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>bistro boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <ChefSef></ChefSef>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;