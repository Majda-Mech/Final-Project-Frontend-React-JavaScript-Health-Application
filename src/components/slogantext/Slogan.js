import React from 'react';
import './Slogan.css'

const Slogan = ({img, imgDescription, title, children}) => {
    return (
        <div className="slogan-styling">
            <section className="slogan-text-styling">
                <h1>{title}</h1>
                {children}
            </section>
            <section className="slogan-img-styling">
                <img src={img} alt={imgDescription}/>
            </section>
        </div>
    );
};

export default Slogan;