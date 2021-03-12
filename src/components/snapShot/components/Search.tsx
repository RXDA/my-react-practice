import React from "react";
import Container from "./Container";

interface searchProps {
    searchTerm: string
}

const Search = ({searchTerm}: searchProps) => {
    return (
        <div>
            <h2>{searchTerm} Images</h2>
            <Container searchTerm={searchTerm}/>
        </div>
    );
};

export default Search;
