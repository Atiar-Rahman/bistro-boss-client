import React from 'react';
import { Helmet } from 'react-helmet-async';
import menuImage from '../../../assets/menu/banner3.jpg';
import dessertImage from '../../../assets/menu/dessert-bg.jpeg'
import saladImage from '../../../assets/menu/salad-bg.jpg'
import soupImage from '../../../assets/menu/soup-bg.jpg'
import pizzaImage from '../../../assets/menu/pizza-bg.jpg'


import useMenu from '../../../Hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import Cover from '../../Shared/Cover/Cover';
const Menu = () => {
    const [menu] = useMenu();
    const pizza = menu.filter(item => item.category==='pizza');
    const soup = menu.filter(item=>item.category==='soup');
    const salad = menu.filter(item=>item.category ==='salad');
    const offered = menu.filter(item=>item.category === 'offered');
    const desserts = menu.filter(item=>item.category === 'dessert');

    return (
        <div>
            <Helmet>
                <title>bistro boss | menu</title>
            </Helmet>
            <Cover img={menuImage} title="Our Menu"></Cover>
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* offered Cover */}
            <MenuCategory items={offered} coverImage={menuImage}></MenuCategory>
            <MenuCategory
                items={desserts}
                title="Dessert"
                coverImage={dessertImage}
            >
            </MenuCategory>
            <MenuCategory
                items={salad}
                title="Salad"
                coverImage={saladImage}
            >
            </MenuCategory>
            <MenuCategory
                items={soup}
                title="Soup"
                coverImage={soupImage}
            >
            </MenuCategory>
            <MenuCategory
                items={pizza}
                title="Pizza"
                coverImage={pizzaImage}
            >
            </MenuCategory>
        </div>
    );
};

export default Menu;