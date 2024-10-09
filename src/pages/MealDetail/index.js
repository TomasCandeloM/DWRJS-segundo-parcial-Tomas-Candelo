import './index.css';
import React, {useEffect, useState} from "react";
import {ReactComponent as Home} from "../../assets/home.svg";
import { Link, useParams } from 'react-router-dom';
import { FetchMealById } from '../../services/mealtService';

const MealDetail = () => {
    const {idMeal} = useParams();
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMeal = async () => {
            try {
                const response = await FetchMealById(idMeal);
                setMeal(response);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        getMeal();
    }, [idMeal]);

    return (
        <>
        <Link to="/" className="back-button">
            <Home className='home-icon' />
        </Link>
        {loading && <p>Loading....</p>}
        {!loading && meal && (
            <div className="meal-detail-container">
                <h1>{meal.strMeal}</h1>
                <div className="meal-content">
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <div className="meal-description">
                        <p>{meal.strInstructions}</p>
                    </div>
                </div>
            </div>
        )}
         {!loading && !meal && <p>meal not found 404</p>}
        
        </>
    );
        


};

export default MealDetail;