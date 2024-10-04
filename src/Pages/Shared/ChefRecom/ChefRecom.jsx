import React from 'react';

const ChefRecom = ({ sef }) => {
    console.log(sef);
   const {name, image,recipe}=sef;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-primary uppercase btn-outline">Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default ChefRecom;