import { render, screen, fireEvent } from "@testing-library/react";
import MealImage from "../index";
import { useNavigate } from "react-router-dom";
import { MOCK_MEAL } from "../../../Mocks/meal";
 
jest.mock("react-router-dom");
 
describe("MealImage", () => {
    const mockNavigate = jest.fn();
   
    beforeEach(() => {
        useNavigate.mockReturnValue(mockNavigate);
    });
 
    it("should render the food card", () => {
        render(<MealImage meal={MOCK_MEAL} />);

        expect(screen.getByTestId('imagen')).toHaveStyle({
            backgroundImage: `url(${MOCK_MEAL.strMealThumb})`
        });
    });
 
    it("should navigate to the detail page", () => {
        render(<MealImage meal={MOCK_MEAL} />);

        fireEvent.click(screen.getByTestId('imagen'));

        expect(mockNavigate).toHaveBeenCalledWith(`/detail/${MOCK_MEAL.idMeal}`);
    });
});
