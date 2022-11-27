import React from 'react';
import AllLaptops from '../allLapytops/AllLaptops';
import Category from '../Category/Category';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeSection from '../HomeSection/HomeSection';

const Home = () => {
    
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeSection></HomeSection>
            <Category></Category>
            <AllLaptops></AllLaptops>      
        </div>
    );
};

export default Home;