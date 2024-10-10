import { render, screen, waitFor, act } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import MealDetail from "../index";
import { FetchMealById } from "../../../services/mealtService";
import { MOCK_MEAL } from "../../../Mocks/meal";
// Mock del servicio
jest.mock('../../../services/mealtService');

describe("MealDetail", () => {
    
    it("should display loading state initially", () => {
        FetchMealById.mockResolvedValueOnce(MOCK_MEAL); 

        render(
            <MemoryRouter initialEntries={["/meal/52855"]}>
                <Routes>
                    <Route path="/meal/:idMeal" element={<MealDetail />} />
                </Routes>
            </MemoryRouter>
        );

        

        expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    });

    it("should display meal details when data is loaded", async () => {
        FetchMealById.mockResolvedValueOnce(MOCK_MEAL); 

        
        render(
            <MemoryRouter initialEntries={["/meal/52855"]}>
                <Routes>
                    <Route path="/meal/:idMeal" element={<MealDetail />} />
                </Routes>
            </MemoryRouter>
        );

        
        await waitFor(() => expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument());

        
        expect(screen.getByText(MOCK_MEAL.strMeal)).toBeInTheDocument(); 
        expect(screen.getByAltText(MOCK_MEAL.strMeal)).toBeInTheDocument(); 
        expect(screen.getByText(MOCK_MEAL.strInstructions)).toBeInTheDocument(); 
    });

    it("should display a 404 message if meal not found", async () => {
        FetchMealById.mockResolvedValueOnce(null); 

        render(
            <MemoryRouter initialEntries={["/meal/99999"]}>
                <Routes>
                    <Route path="/meal/:idMeal" element={<MealDetail />} />
                </Routes>
            </MemoryRouter>
        );

        await waitFor(() => expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument());

        
        expect(screen.getByText(/meal not found 404/i)).toBeInTheDocument();
    });

    it("should navigate back when clicking the home button", async () => {
        FetchMealById.mockResolvedValueOnce(MOCK_MEAL);

        render(
            <MemoryRouter initialEntries={["/meal/52855"]}>
                <Routes>
                    <Route path="/meal/:idMeal" element={<MealDetail />} />
                    <Route path="/" element={<p>Home Page</p>} />
                </Routes>
            </MemoryRouter>
        );

        
        await waitFor(() => expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument());

        
        const homeButton = screen.getByRole("link");
        homeButton.click();

        
    });
});
