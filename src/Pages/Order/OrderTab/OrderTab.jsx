import React from 'react';
import FoodCart from '../../../components/FoodCart/FoodCart';

const OrderTab = ({category}) => {
   return(
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
            category.map(item => <FoodCart key={item._id} item={item}></FoodCart>)
        }
    </div>
   );
};

export default OrderTab;