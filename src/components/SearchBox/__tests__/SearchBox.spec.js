import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { FiltersProvider } from "../../../Context/filtersCtx"  
import SearchBox from "../index"; 

describe("SearchBox", () => {
    const renderWithFiltersProvider = (ui) => {
        return render(<FiltersProvider>{ui}</FiltersProvider>);
    };

    test("renders input with placeholder", () => {
        renderWithFiltersProvider(<SearchBox />);
        

        const inputElement = screen.getByPlaceholderText(/Search Meal.../i);
        expect(inputElement).toBeInTheDocument();
    });

    test("updates filters context on input change", () => {
        renderWithFiltersProvider(<SearchBox />);

        const inputElement = screen.getByPlaceholderText(/Search Meal.../i);

        fireEvent.change(inputElement, { target: { value: "Beef" } });

        expect(inputElement.value).toBe("Beef");
    });
});
