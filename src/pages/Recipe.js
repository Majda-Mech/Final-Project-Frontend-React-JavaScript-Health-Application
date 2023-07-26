import React, { useEffect, useState} from 'react';
import sloganImg from "../../../frontend-eindopdracht/src/assets/avocado drink.png";
import Slogan from "../components/slogantext/Slogan";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import UserData from "../components/userdata/UserData";

const Recipe = () => {

    const apiKey = "apiKey=2833f45c5780466fab0feaa2a66076e0"
    const {id} = useParams();
    const apiData = `https://api.spoonacular.com/recipes/${id}/information?${apiKey}&includeNutrition=false`
    const [recipe, setRecipe] = useState(``)

    useEffect(() => {
        // const source = axios.CancelToken.source()

        async function fetchData() {
            console.log(id)

            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?${apiKey}&includeNutrition=false`,{
                    headers: {
                        'Content-Type': 'application/json'
                    }})

                setRecipe(result.data)
                console.log(result.data)

            } catch (e) {
                console.error(e);
            }
        }

        fetchData()
        // fetchData().then(r => )

        // return function cleanup(){
        //     source.cancel();
        // }

    }, [id]);

    return (
        <div>
            <Slogan
                title="Smech-it recipe information page"
                img={sloganImg} imgDescription="Smech-it!">
                <p>We gathered some info on how to make your recipe! Want to go back to the home screen? Click <Link
                    to="/">Here</Link></p>
            </Slogan>

            <UserData/>
            {recipe &&
            <>
                <div className="recipe-info-styling">
                    <section>
                        <h2>{recipe.title}</h2>
                        <div className="title-info-styling">
                            <div><img src={recipe.image} alt="food"/></div>
                            <div className="meta-data-styling">
                                <p>Cooking time {recipe.instructions}</p>
                            </div>
                        </div>
                    </section>

                    <article>
                        <h2>Summary of calories & protein & fat , ect</h2>
                        <div className="summary-styling" dangerouslySetInnerHTML={{__html: recipe.summary}}></div>
                    </article>

                    <article>
                        {/*<h1>Cooking Steps</h1>*/}
                        <ul className="recipe-list-styling">
                            {/*/!*{recipe.analyzedInstructions[0].steps.map((data) => {*!/*/}
                            {/*/!*    return (<li key={data.step}>{data.step}</li>)*!/*/}
                            {/*})}*/}
                        </ul>
                    </article>

                </div>
            </>}
        </div>
    );
};

export default Recipe;