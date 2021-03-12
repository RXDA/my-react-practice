import React, {useState} from "react";
import filterEmoji from "./components/filterEmoji";
import {Header} from "./components/Header";
import {SearchInput} from "./components/SearchInput";
import {EmojiResults} from "./components/EmojiResults";

export const App = () => {
    const [filteredEmoji, setFilteredEmoji] = useState(filterEmoji("", 20))
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilteredEmoji(filterEmoji(e.target.value, 20))
    }

    return (
        <div>
            <Header/>
            <SearchInput textChange={handleSearchChange}/>
            <EmojiResults emojiData={filteredEmoji}/>
        </div>
    )

}

