import React from "react";
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 
                                d-flex flex-column justify-content-center">
                                    <h1>{props.name} <strong className="brand-name"> weCode.</strong></h1>
                                    <h2 className="my-3">
                                        We are a Team of Self-Taught Developers <br />
                                        making cool projects and learning and teaching new technologies.
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink exact to={props.path}
                                            className="btn-get-started">{props.btn}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-image">
                                    <img src={props.imgSrc} alt="home image" className="h_img img-fluid animated" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Common;