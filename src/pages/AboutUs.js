import React from 'react';
import "./pages.css"
import Slogan from "../components/slogantext/Slogan";
import sloganImg from "../../../frontend-eindopdracht/src/assets/blue lady first page.png";
// import guideImg from "../../../frontend-eindopdracht/src/assets/blue lady first page.png";
const AboutUs = () => {
    return (
        <div>
            <Slogan
                title="Eat fresh with Smech -it healthy life"
                img={sloganImg} imgDescription="Smech-it">
                <p>Do u want healthy recipes with low calories, read here about the easy recipes to make with simple instructions.</p>
            </Slogan>

            <h2 className="content-title">About Us </h2>
            <article className ="article-content">
                <p> A healthy lifestyle isn't easy and quite a challenge. To create a new healthy lifestyle seems hard, when u start it will become a habit.</p>
                <p>A healthy diet is thee right amount of calories and a balance in variety. If you eat or drink more than your body needs, you'll put on weight because the energy you do not use is stored as fat.</p>
                <p> A wide range of foods to makes a balanced diet easy for your body and it is receiving all the nutrients it needs.  It's recommended that men have around 2,500 calories a day (10,500 kilojoules). Women should have around 2,000 calories a day (8,400 kilojoules). Most adults eating more calories than they need and should eat fewer calories.</p>
                <h3>Here is where this Smech-it web application can help!</h3>
                <p>Because we care for us questions about what you are consuming, how much calories you should take and provide you with recipes to create a new way of healthy living!</p>
            </article>
        </div>
    );
};

export default AboutUs;