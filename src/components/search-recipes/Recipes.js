import React, {useState} from 'react';
import "./Recipes.css"
import axios from "axios";
import Button from "../button/Button";
import {useNavigate} from "react-router-dom";

const Recipes = () => {

    const apiKey = "apiKey=2833f45c5780466fab0feaa2a66076e0"

    const [apiData, setApiData] = useState(``)
    const [search, setSearch] = useState(``)
    const navigate = useNavigate()

        async function handleSubmit(e) {
            e.preventDefault()
            console.log('fetchData aangeroepen')

            try {
                const result = await axios.get(`
                https://api.spoonacular.com/recipes/complexSearch?${apiKey}&number=3&query=${search}`);

                console.log('result.data: ', result.data)
                setApiData(result.data.results)

            } catch (e) {
                console.error(e);
            }
        }

    return (
        <div>
            <div className="recipe-form-styling">
                <form className="form-styling">
                    <label htmlFor="search-field">
                        <input
                            type="search"
                            id="search-field"
                            name="search"
                            placeholder="Typ in a recipe or ingredient"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </label>
                </form>

                <div className="btn-recipe-styling">
                    <Button styleCompId="recipe-btn-styling"
                            clickHandler={handleSubmit}>Search
                    </Button>
                </div>
            </div>

            <div className="recipe-data">
                {apiData &&
                <>
                    <ul>
                        {console.log('apiData: ',apiData)}
                        {apiData.map((data) => {

                            function redirectFunction(e) {
                                e.preventDefault()
                                navigate(`/recipe-info/${data.id}`);
                            }

                            return (

                                <li key={data.id}>
                                    <h2>{data.title}</h2>
                                    <img src={data.image} alt="food"/>
                                    <div className="btn-login-styling">
                                        <Button
                                            clickHandler={redirectFunction}
                                        >Recipe Info</Button>
                                    </div>
                                </li>)})}
                    </ul></>}
            </div>
        </div>
    );
};

export default Recipes;