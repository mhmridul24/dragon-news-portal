import React, { use } from 'react';
const catagoryPromise =fetch("categories.json").then((res)=> res.json());

const Catagories = () => {
    const catagories = use(catagoryPromise);
    return (
        <div>
            <h2 className='font-bold'>All Catagories ({catagories.length})  </h2>
        </div>
    );
};

export default Catagories;