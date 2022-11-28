import React from 'react';
import { Link, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';



const CategoryCard = ({ laptop }) => {
    const navigation = useNavigation()

    if(navigation.state === "loading"){
        return <Loading></Loading>
    }

    const { img, name, description, id } = laptop
    return (


        <div className="card m-10 shadow-xl image-full">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="text-center text-3xl my-5">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-center">
                    <Link to={`/allLaptops/${id}`}>
                        <button className="btn btn-primary mt-5 underline ">Buy {name} From Here </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;