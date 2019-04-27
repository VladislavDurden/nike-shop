import React from 'react';

import MainSlider from '../MainPage/MainSlider/MainSlider';
import SecondSection from '../MainPage/SecondSection/SecondSection';
import Collection from '../MainPage/Collection/Collection';
import FooterSection from '../MainPage/FooterSection/FooterSection';

const MainPage = ({ route }) => {
    return(
        <React.Fragment>
            <MainSlider />
            <SecondSection />
            <Collection />
            <FooterSection />
        </React.Fragment>
        
    
    )
}

export default MainPage;