import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const MealImage = ({meal}) => {
    const navigate = useNavigate();

    const HandleClick = () => {
        navigate(`/detail/${meal.idMeal}`);
    }

    return (
        <div className="preview-meal" onClick={HandleClick}>
            <div className="card-background-meal">
                <div id ="image-meal" style={{backgroundImage: `url(${meal.strMealThumb})`, }}>
                </div>
            </div>    
        </div>
    );
}

export default MealImage;