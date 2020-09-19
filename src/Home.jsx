import React from 'react';
import Common from './Common';
import img from "./images/homepage2.png";
const Home = () => {
    return (
        <>
            <Common
                name="Kick Start Your Coding Career with"
                imgSrc={img}
                btn="Get Started"
                path="/services" />
        </>
    );
}
export default Home;

