import './index.css';
import React  from 'react';
import SearchBox from '../../components/SearchBox';
import MealImage from '../../components/MealImage';

import useMeals from '../../hooks/useMeals';
import { UseMealContext } from '../../Context/mealctx';

const MealList = () => {
    useMeals();
    const {meals, loading} = UseMealContext();

    return (
        <div className="App">
            <SearchBox />
            {loading && <p>Loading...</p>}
            <div className='mealList'>
            {!loading && meals.map((meal, index) => (
                <MealImage key={meal.idmeal} meal={meal} />
            ))}
            </div>
        </div>
    );
}

export default MealList;