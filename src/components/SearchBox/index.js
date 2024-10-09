import React from "react";
import {ReactComponent as Search} from "../../assets/search.svg";
import SearchInput from "./searchinput";
import "./index.css";

const SearchBox = ({onSearch}) => {
    return (
        <div className="barra-busqueda">
            <Search  className="icono-busqueda"/>
            <SearchInput className="input-busqueda" onChange={onSearch}/>
        </div>
    );
};

export default SearchBox;