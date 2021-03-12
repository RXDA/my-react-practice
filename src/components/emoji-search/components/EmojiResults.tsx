import React, {useEffect} from "react";
import Clipboard from "clipboard";
import "./EmojiResults.css"
import {emojiData} from "./EmojiResultRow";
import {EmojiResultRow} from "./EmojiResultRow"

interface emojiResultsProp {
    emojiData: emojiData[]
}


export const EmojiResults = React.memo((props: emojiResultsProp) => {
    let clipboard: Clipboard
    useEffect(() => {
        clipboard = new Clipboard(".copy-to-clipboard")
        return () => clipboard.destroy()
    });

    return (
        <div className="component-emoji-results">
            {props.emojiData.map(emojiData => (
                <EmojiResultRow
                    key={emojiData.title}
                    symbol={emojiData.symbol}
                    title={emojiData.title}
                />
            ))}
        </div>
    );
})
