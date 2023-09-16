import React from 'react';
import './recipe-card.css';

function RecipeCard(props) {
    return (
        <div className="recipe-card">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <ul>
                {props.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeCard;
