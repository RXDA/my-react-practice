
import React from 'react'
import {App as CalculatorApp} from "./components/calculator/App";
import {App as EmojiApp} from "./components/emoji-search/App"
import {App as SnapShotApp} from "./components/snapShot/App"
import {HashRouter, Link, Route, Switch} from "react-router-dom";
import {AppCss} from "./components/calculator/css";

function App() {
    return (
        <HashRouter basename="/">
            <div>
                <ul style={{
                    display: "block",
                }}>
                    <li>
                        <Link to="/calculator">Home</Link>
                    </li>
                    <li>
                        <Link to="/emojiSearch">About</Link>
                    </li>
                    <li>
                        <Link to="/SnapScout">Dashboard</Link>
                    </li>
                </ul>

                <hr/>

                <Switch>
                    <Route exact path="/calculator">
                        <CalculatorApp/>
                    </Route>
                    <Route path="/emojiSearch">
                        <EmojiApp/>
                    </Route>
                    <Route path="/SnapScout">
                        <SnapShotApp/>
                    </Route>
                </Switch>
            </div>
        </HashRouter>
    )
}

export default App
