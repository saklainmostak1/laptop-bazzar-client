import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CategoryCard = ({ laptop }) => {
    const laptops = useLoaderData([])
    console.log(laptops);

    const {img, name, description, id} = laptop
    return (
        <div className="card m-10 shadow-xl">
            <figure><img className='w-full' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-center mt-5">
                    <Link to={`/laptop/${id}`}>
                    <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;