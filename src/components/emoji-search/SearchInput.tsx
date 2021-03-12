import React from "react";

interface searchInputProps {
    textChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput = React.memo((props: searchInputProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.textChange(e);
    };
    return (
        <div className="component-search-input">
            <div>
                <input onChange={handleChange}/>
            </div>
        </div>
    )
})
