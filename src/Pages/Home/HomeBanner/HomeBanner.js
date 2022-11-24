import React from 'react';
import BannerDetails from '../BannerDetails/BannerDetails';
import image1 from './img1.jpg'
import image2 from './img2.jpg'
import image3 from './img3.jpg'

const HomeBanner = () => {
    const homeBanners = [
        {
            id: 1,
            image: image1,
            previous: 4,
            next: 2
        },
        {
            id: 2,
            image: image2,
            previous: 1,
            next: 3
        },
        {
            id: 3,
            image: image3,
            previous: 2,
            next: 1,
        },
       
    ]
    return (
        <div className="carousel py-10 lg:ml-0 md:ml-0 ">
            {
               homeBanners.map(homeBanner => <BannerDetails
               key={homeBanner.id}
               homeBanner={homeBanner}
               ></BannerDetails> ) 
            }
        </div>
    );
};

export default HomeBanner;