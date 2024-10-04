import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ChefService from '../ChefService/ChefService';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Contact from '../../../components/Contact/Contact';
import ChefRecom from '../../Shared/ChefRecom/ChefRecom';
import ChefSef from '../ChefSef/ChefSef';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <ChefSef></ChefSef>
            <Featured></Featured>
        </div>
    );
};

export default Home;