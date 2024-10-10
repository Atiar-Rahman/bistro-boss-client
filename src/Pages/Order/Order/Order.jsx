import React, { useState } from 'react';
import Cover from '../../Shared/Cover/Cover';
import orderImg from '../../../assets/shop/banner2.jpg';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';

const Order = () => {
    const [tabindex,setTabIndex] = useState(0);
    const [menu] = useMenu();
    const pizza = menu.filter(item => item.category==='pizza');
    const soup = menu.filter(item=>item.category==='soup');
    const salad = menu.filter(item=>item.category ==='salad');
    const offered = menu.filter(item=>item.category === 'offered');
    const desserts = menu.filter(item=>item.category === 'dessert');
    return (
        <div>
            <Cover img={orderImg} title="OrderFood"></Cover>
            <h1>this order page</h1>
            <Tabs defaultIndex={1} onSelect={index=> setTabIndex(index)}>
                <TabList className='uppercase'>
                    <Tab>salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drink</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 4</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 5</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;