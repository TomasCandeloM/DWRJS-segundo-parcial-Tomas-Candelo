import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MealList from "./pages/MealList";
import MealDetail from "./pages/MealDetail";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import { MealProvider } from "./Context/mealctx";
import { FiltersProvider} from "./Context/filtersCtx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MealList />
  },
  
  {
    path: '/detail/:idMeal',
    element: <MealDetail />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MealProvider>
      <FiltersProvider>
        <RouterProvider router={router} />
      </FiltersProvider>
    </MealProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
