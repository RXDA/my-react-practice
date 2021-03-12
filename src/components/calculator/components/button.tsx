import React from 'react'
import './Button.css'

interface buttonProps {
    name: string,
    orange?: boolean,
    wide?: boolean,
    clickHandler: (name: string) => void,
}

export const Button = (props: buttonProps) => {
    const {name, orange, wide, clickHandler} = props
    const className = [
        "component-button",
        orange ? "orange" : "",
        wide ? "wide" : "",
    ]
    return (<div className={className.join(" ").trim()}>
        <button onClick={() => {
            clickHandler(name)
        }}>{name}</button>
    </div>)
}
