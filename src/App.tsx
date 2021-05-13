import React, {memo} from 'react'
import {App as CalculatorApp} from "./components/calculator/App";
import {App as EmojiApp} from "./components/emoji-search/App"
import {App as SnapShotApp} from "./components/snapShot/App"
import {App as BmiCalculator} from "./components/bmi-calculator/App"
import {HashRouter, Link, Route, Switch} from "react-router-dom";
import SubscribePage from "./components/react03/exercise2";
import {Resume} from "./components/react03/exercise3";
import {Exercise2} from "./components/11_events/exercise2";
import {SomeForm, SomeMultipleInputForm} from "./components/13-uncotrolled-components/uncontrolledForm"
import {SomeAxiosJS} from "./components/15-3rd-part-package/axios-js"
import {SomeAxios} from "./components/15-3rd-part-package/axios"
import {SomeBrowserRouter, SomeNavLinkRouter} from "./components/17-router/broswer_router";

// function App() {
//     return (
//         // <BmiCalculator/>
//         // <HashRouter basename="/">
//         //     <div>
//         //         <ul>
//         //             <li>
//         //                 <Link to="/calculator">Home</Link>
//         //             </li>
//         //             <li>
//         //                 <Link to="/emojiSearch">About</Link>
//         //             </li>
//         //             <li>
//         //                 <Link to="/SnapScout">Dashboard</Link>
//         //             </li>
//         //             <li>
//         //                 <Link to="/bmiCalculator">BmiCalculator</Link>
//         //             </li>
//         //         </ul>
//         //
//         //         <hr/>
//         //
//         //         <Switch>
//         //             <Route exact path="/calculator">
//         //                 <CalculatorApp/>
//         //             </Route>
//         //             <Route path="/emojiSearch">
//         //                 <EmojiApp/>
//         //             </Route>
//         //             <Route path="/SnapScout">
//         //                 <SnapShotApp/>
//         //             </Route>
//         //             <Route path="/bmiCalculator">
//         //                 <BmiCalculator/>
//         //             </Route>
//         //         </Switch>
//         //     </div>
//         // </HashRouter>
//     )
// }

const App = () => {
    return (
        <SomeNavLinkRouter/>
    )
}

export default App
