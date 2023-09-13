import React from 'react';
import Slogan from "../components/slogantext/Slogan";
// import sloganImg from "../../../frontend-eindopdracht/src/assets/buik.png";
import guideImg from "../assets/buik.png"

import {Link} from "react-router-dom";

const OurApp = () => {
    return (
        <div>
            <Slogan
                title="What is the Smech-it App?"
                img= {guideImg} imgDescription="Smech-it">
                <p>Smech-it is a app to search for recipes, while calculating your calories or just eat healthy. </p>
            </Slogan>

            <h2 className="content-title">Smech-it Features!</h2>

            <article className="article-content">
                <p> In this page u can find recipes that can be made with a simple search request.
                    We will provide recipes and information such as calories, protein, fat and simple cooking instructions explained step by step.
                </p>
                <p>Learning new habits and routines can be challenging. This is why an extra tool like this web application can help for insight and routine that contribute to a healthy lifestyle and a balanced way of eating.
                </p>
                <h2> Features explained <Link to="/sign-up">Here</Link></h2>
                <div className="guide-img-styling">
                    <img className="guide-size-styling" src= {guideImg} alt="instructions"/>
                </div>
            </article>
        </div>
    );
};

export default OurApp;