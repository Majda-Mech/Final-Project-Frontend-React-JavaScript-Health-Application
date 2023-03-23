import React, { useEffect, useState} from 'react';
import sloganImg from "../assets/buik.png";
import Slogan from "../components/slogantext/Slogan";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import UserData from "../components/userdata/UserData";

const Recipe = () => {

    const apiKey = "?apiKey="
    const {id} = useParams();
    const apiData = `https://api.spoonacular.com/recipes/${id}/information${apiKey}&includeNutrition=true`
    const [recipe, setRecipe] = useState(``)

    useEffect(() => {
        const source = axios.CancelToken.source()

        async function fetchData() {
            try {
                const result = await axios.get(apiData,{
                    cancelToken: source.token,
                });

                setRecipe(result.data)

            } catch (e) {
                console.error(e);
            }
        }

        fetchData()

        return function cleanup(){
            source.cancel();
        }

    }, [apiData]);

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
                                <p>Cooking time {recipe.readyInMinutes}</p>
                                <p>Kcal {recipe.nutrition.nutrients[0].amount}</p>
                                <p>Fat {recipe.nutrition.nutrients[1].amount}</p>
                                <p>Carb {recipe.nutrition.nutrients[3].amount}</p>
                                <p>Protein {recipe.nutrition.nutrients[9].amount}</p>
                            </div>
                        </div>
                    </section>

                    <article>
                        <h2>Summary</h2>
                        <div className="summary-styling" dangerouslySetInnerHTML={{__html: recipe.summary}}></div>
                    </article>

                    <article>
                        <h2>Cooking Steps</h2>
                        <ul className="recipe-list-styling">
                            {recipe.analyzedInstructions[0].steps.map((data) => {
                                return (<li key={data.step}>{data.step}</li>)
                            })}
                        </ul>
                    </article>

                </div>
            </>}
        </div>
    );
};

export default Recipe;