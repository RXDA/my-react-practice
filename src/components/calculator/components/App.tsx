import React from "react";
import {useState} from "react";
import {calculate} from "../logic/calculate";
import {ButtonPanel} from "./buttonPanel";
import {Display} from "./display";
import "./App.css"

export const App = () => {
    const [total, setTotal] = useState("")
    const [next, setNext] = useState("")
    const [operation, setOperation] = useState("")

    const handleClick = (buttonName: string) => {
        console.log(total, next, operation)
        const res = calculate({total, next, operation}, buttonName)
        console.log(res)
        setTotal(res.total!)
        setNext(res.next!)
        setOperation(res.operation!)
    }

    return (
        <div className={"component-app"}>
            <Display value={next || total || "0"}/>
            <ButtonPanel clickHandler={handleClick}/>
        </div>
    )
}
