import React from 'react';

const FoodCart = ({item}) => {
    const {name, image,price,recipe} = item;
    return (
        <div className="card bg-base-100 shadow-xl my-10">
            <figure>
                <img
                    src={image}
                    alt={name} />
            </figure>
            <p className='absolute right-0 m-5 p-2 rounded-tr-xl rounded-bl-xl bg-slate-800 text-white'>${price}</p>
            <div className="card-body">
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline bg-slate-200 border-0 border-b-4 mt-4 text-black">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;