import React from 'react';
import AllLaptops from '../allLapytops/AllLaptops';
import Category from '../Category/Category';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeSection from '../HomeSection/HomeSection';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Category></Category>
            <AllLaptops></AllLaptops>
            <HomeSection></HomeSection>
        </div>
    );
};

export default Home;