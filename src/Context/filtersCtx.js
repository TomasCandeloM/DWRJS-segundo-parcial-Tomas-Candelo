import { createContext, useContext, useState } from "react";

const FiltersContext = createContext(null);

export const useFiltersContext = () => {
    const context = useContext(FiltersContext);
    if (!context) {
        throw new Error("useFilter must be used within a FilterProvider");
    }
    return context;
};

export const FiltersProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        search: "",
        page: 0
    });

    return (
        <FiltersContext.Provider value={{ filters, setFilters }}>
            {children}
        </FiltersContext.Provider>
    );
}