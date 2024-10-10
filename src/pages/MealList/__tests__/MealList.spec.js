
import { render, screen } from "@testing-library/react";
import { FiltersProvider } from "../../../Context/filtersCtx";
import { MealProvider, UseMealContext } from "../../../Context/mealctx"
import MealList from "../index";
import { actions } from "../../../Context/mealReducer";
import { MOCK_MEAL } from "../../../Mocks/meal";
import { useContext } from "react";

jest.mock("../../../Context/mealctx")
jest.mock("../../../hooks/useMeals")
describe("MealList", () => {

    beforeEach(() => {
        UseMealContext.mockImplementation(() => ({
            loading: true,
            meals: [ 
                {
                    idMeal: "52767",
                    strMeal: "Bakewell tart",
                    strMealThumb: "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg", // URL de la imagen de prueba
                },
                {
                    idMeal: "52792",
                    strMeal: "Bread and Butter Pudding",
                    strMealThumb: "https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg",
                },
            ],
        }))
    })

    test("renders loading message when loading is true", () => {
        render(
            <FiltersProvider>
              <MealProvider>
                <MealList />
              </MealProvider>
            </FiltersProvider>
          );
          console.log("debug");
          screen.debug();

        const loadingMessage = screen.getByText("Loading...");
        expect(loadingMessage).toBeInTheDocument();
    });

    /*
    test("renders meal images when loading is false", () => {

      
        render(
            <FiltersProvider>
              <MealProvider>
                <MealList />
              </MealProvider>
            </FiltersProvider>
          );

        // Verifica que las imágenes de las comidas se renderizan
        const imageElement = screen.getByTestId("imagen");
        expect(imageElement.lenght).toBeInTheDocument(2);

        // Verifica que el estilo de fondo de la imagen sea correcto
        expect(imageElement[0]).toHaveStyle(`backgroundImage: url(https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg)`);
    });
    */
});
