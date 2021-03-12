import React from "react";
import Container from "./Container";


interface itemProps {
    searchTerm: string
}

const Item = ({searchTerm}: itemProps) => {
    return (
        <div>
            <h2>{searchTerm} Pictures</h2>
            <Container searchTerm={searchTerm}/>
        </div>
    )
}

export default Item
