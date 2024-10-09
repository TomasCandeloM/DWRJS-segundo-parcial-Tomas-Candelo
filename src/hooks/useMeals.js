import { useCallback, useEffect } from "react";
import { UseMealDispatch } from "../Context/mealctx";
import { actions } from "../Context/mealReducer";
import { useFiltersContext } from "../Context/filtersCtx";
import { SearchMealByName, FetchMealByFirstLetter } from "../services/mealtService";


const useMeals = () => {
    const dispatch = UseMealDispatch();
    const { filters } = useFiltersContext();

    const fetchAllMeals = async () => {
        let allMeals = [];

        if (filters.search) {
            const meals = await SearchMealByName(filters.search);
            allMeals = meals || [];
        }
        
        return allMeals;
    };

    const fetchMeals = useCallback(async () => {
        dispatch({ type: actions.SET_LOADING, payload: true });

        try {
            if (filters.search) {
                var allMeals = await fetchAllMeals();

                if (allMeals.length > 0) {
                    dispatch({type: actions.SET_MEALS, payload: allMeals });
                } else {
                    dispatch({type: actions.SET_MEALS, payload: []});
                }
            } else {
                const mealsByLetter = await FetchMealByFirstLetter();
                dispatch({ type: actions.SET_MEALS, payload:mealsByLetter });
            }
        } catch (error) {
            console.error("Error fetching Meals: ", error);
            dispatch({ type: actions.SET_MEALS, payload: []});
        }

        dispatch({ type: actions.SET_LOADING, payload: false});

        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, filters]);

    useEffect(() => {
        fetchMeals();
    }, [fetchMeals]);

};

export default useMeals;