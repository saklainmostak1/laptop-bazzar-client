import React from 'react';

const BannerDetails = ({homeBanner}) => {
    const {image, previous, next, id} = homeBanner
    console.log(homeBanner);
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full ">
            <div className='carousel-img m-auto '>
                <img src={image} alt='' className=" rounded-xl w-full" />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${previous}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>

            </div>
        </div>
    );
};

export default BannerDetails;