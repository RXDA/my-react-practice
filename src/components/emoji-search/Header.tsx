import React from "react";
import "./Header.css"

export const Header = React.memo(() => {
    return (
        <header className="component-header">
            <img
                src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
                width="32"
                height="32"
                alt=""
            />
            Emoji Search
            <img
                src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
                width="32"
                height="32"
                alt=""
            />
        </header>
    )
})
