import React from 'react';
import AllLaptops from '../allLapytops/AllLaptops';
import Category from '../Category/Category';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Category></Category>
            <AllLaptops></AllLaptops>
        </div>
    );
};

export default Home;