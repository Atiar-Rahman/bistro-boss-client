import React from 'react';

const FoodCart = ({item}) => {
    const {name, image,price,recipe} = item;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{image}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;