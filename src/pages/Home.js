
import React from 'react';
import Slogan from "../components/slogantext/Slogan";
import sloganImg from "../../../frontend-eindopdracht/src/assets/first page app.png";
import Recipes from "../components/search-recipes/Recipes";
import Calculator from "../components/calculator/Calculator";

const Home = () => {
    return (
        <div>
            <Slogan
                title="Need help Smech-it got u!"
                img={sloganImg} imgDescription="Smech-it">
                <p>Our goal is to give an insight on healthy recipes, nutrition, focusing on simplicity.</p>

                    <h3>Please log in to use the recipe, and calculator options.</h3>
            </Slogan>

            <h2 className="content-title">Simple recipe search engine</h2>

            <Recipes/>

            <Calculator/>

        </div>
    );
};

export default Home;