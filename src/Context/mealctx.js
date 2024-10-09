import { createContext, useContext, useReducer} from "react";
import { initialState, mealReducer } from "./mealReducer";

const mealContext = createContext(null);
const MealDispatchContext = createContext(null);

export function UseMealContext() {
    const context = useContext(mealContext);
    if(!context){
        throw new Error("useMeal debe ser usado con un MealProvider");
    }
    return context;
}

export function UseMealDispatch(){
    const context = useContext(MealDispatchContext);
    if (!context){
        throw new Error("useMealDispatch debe ser usado con un MealProvider");
    }
    return context;
}

export function MealProvider({ children }) {
    const [state, dispatch] = useReducer(mealReducer, initialState);
    return (
        <mealContext.Provider value={state}>
            <MealDispatchContext.Provider value={dispatch}>
                {children}
            </MealDispatchContext.Provider>
        </mealContext.Provider>
    );
}