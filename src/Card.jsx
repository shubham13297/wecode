import React from 'react';
import { NavLink } from 'react-router-dom';



const Card = (props) => {
    return (
        <>
            <div className='col-md-4 col-10 mx-auto'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={props.imgSrc} className="card-img-top" alt="img" height="200px" width="200px" />
                    <div className="card-body">
                        <h5 className="card-title"><strong>{props.title}</strong></h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="/contact" className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;