import React from 'react';

import chef_service from  '../../../assets/home/chef-service.jpg'

const ChefService = () => {
    return (
        <div
            className="hero h-[70vh] mb-10"
            style={{
                backgroundImage: `url(${chef_service})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="inline text-black p-10 w-3/4 hero-content text-center bg-white">
            
                <h1 className="mb-5 text-5xl font-bold uppercase">Bistro Boss</h1>
                <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
            </div>
        </div>
    );
};

export default ChefService;