import React, {useState} from "react";
import filterEmoji from "./filterEmoji";
import {Header} from "./Header";
import {SearchInput} from "./SearchInput";
import {EmojiResults} from "./EmojiResults";

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

