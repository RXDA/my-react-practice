/** @jsx jsx */
import React from "react";
import {useState} from "react";
import {calculate} from "./logic/calculate";
import {ButtonPanel} from "./components/buttonPanel";
import {Display} from "./components/display";
import {css, Global, jsx} from "@emotion/react";
import {IndexCss} from "./css";

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
        <div css={css`
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          height: 100%;
        `}>
            <Global styles={IndexCss}/>
            <Display value={next || total || "0"}/>
            <ButtonPanel clickHandler={handleClick}/>
        </div>
    )
}
