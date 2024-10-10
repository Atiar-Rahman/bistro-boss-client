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
                <h2 className="card-title">{image}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;