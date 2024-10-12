import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const Main = () => {
    const location = useLocation();// find location
    const noHeaderFooter = location.pathname.includes('login');
    console.log(location);

    return (
        <div>
           {noHeaderFooter || <NavBar></NavBar>}//when noHeaderFooter = true no check navbar and for || 
                                   //when use && two condition check and when noHeaderFooter == false check the second condition.
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;