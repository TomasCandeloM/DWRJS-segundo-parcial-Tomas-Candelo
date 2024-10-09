import React from "react";

import {useFiltersContext} from "../../Context/filtersCtx";

const SearchInput = () => {
    const {filters, setFilters} = useFiltersContext();
    return (
        <input
            type="text"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            placeholder="Search Meal..."
        />
    );
};



export default SearchInput;