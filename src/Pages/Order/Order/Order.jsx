import React, { useState } from 'react';
import Cover from '../../Shared/Cover/Cover';
import orderImg from '../../../assets/shop/banner2.jpg';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import FoodCart from '../../../components/FoodCart/FoodCart';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    //array create all category
    const categories = ['Pizza','Soup','Salad','Dessert','Drink'];
   
    const {category} = useParams();
    // console.log(category);
    const initialIndex = categories.indexOf(category);
    // console.log(initialIndex);


    const [tabindex,setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const pizza = menu.filter(item => item.category==='pizza');
    const soup = menu.filter(item=>item.category==='soup');
    const salad = menu.filter(item=>item.category ==='salad');
    const drinks = menu.filter(item=>item.category === 'drinks');
    const desserts = menu.filter(item=>item.category === 'dessert');

   
    return (
        <div className='my-10'>
            <Helmet>
                <title>Bistro Boss | order food</title>
            </Helmet>
            <Cover img={orderImg} title="OrderFood"></Cover>
            <Tabs defaultIndex={tabindex} onSelect={index=> setTabIndex(index)} className='my-10 text-center'>
                <TabList className='uppercase'>
                    <Tab>pizza</Tab>
                    <Tab>soup</Tab>
                    <Tab>salad</Tab>
                    <Tab>dessert</Tab>
                    <Tab>drink</Tab>
                </TabList>

                <TabPanel>
                    {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        pizza.map(item=><FoodCart key={item._id} item={item}></FoodCart>)
                    }
                    </div> */}
                    <OrderTab category={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            soup.map(item=><FoodCart key={item._id} item={item}></FoodCart>)
                        }
                    </div> */}
                    <OrderTab category={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            salad.map(item=><FoodCart key={item._id} item={item}></FoodCart>)
                        }
                    </div> */}
                    <OrderTab category={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            desserts.map(item=><FoodCart key={item._id} item={item}></FoodCart>)
                        }
                    </div> */}
                    <OrderTab category={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            drinks.map(item=><FoodCart key={item._id} item={item}></FoodCart>)
                        }
                    </div> */}
                    <OrderTab category={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;