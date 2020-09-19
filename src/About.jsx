import React from 'react';
import Common from './Common';
import img from "./images/homepage2.png";
const About = () => {
    return (
        <>
            <Common
                name="About"
                imgSrc={img}
                btn="Contact Us"
                path="/contact" />
        </>
    );
}
export default About;