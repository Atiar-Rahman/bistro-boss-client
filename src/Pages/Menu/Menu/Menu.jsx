import React from 'react';
import { Helmet } from 'react-helmet-async';
import menuImage from '../../../assets/menu/banner3.jpg';
import Cover from '../../Shared/Cover/Cover';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>bistro boss | menu</title>
            </Helmet>
            <Cover img={menuImage} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImage} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImage} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;