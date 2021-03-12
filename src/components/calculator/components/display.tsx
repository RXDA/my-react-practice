import React from "react"
import "./Display.css"

interface displayProps {
    value:string
}

export const Display = (props:displayProps) => {
    return(<div className="component-display">
        <div>{props.value}</div>
    </div>)
}
