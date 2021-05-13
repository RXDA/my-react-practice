import React from 'react'
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'

// Home component
const Home = () => <h1>Welcome Home</h1>
// About component
const About = () => <h1>About Us</h1>
// Contact component
const Contact = () => <h1>Contact us</h1>
// Challenge component
const Challenges = () => (
    <div>
        <h1>30 Days Of React Challenge</h1>
    </div>
)
const NotFound = () => <h1>The page your looking for not found</h1>

export const SomeBrowserRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route strict path='/about' component={About}/>
                    <Route strict path='/contact' component={Contact}/>
                    <Route strict path='/challenges' component={Challenges}/>
                </Switch>
            </div>
        </Router>
    )
}

const Navbar = ()=>{
    return(
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/contact'>Contact</NavLink>
            </li>
            <li>
                <NavLink to='/contact'>Contact</NavLink>
            </li>
            <li>
                <NavLink to='/challenges'>Challenges</NavLink>
            </li>
        </ul>
    )
}

export const SomeNavLinkRouter = ()=>{
    return (
        <Router>
            <div className='App'>
                <Navbar/>
                <Switch>
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/challenges' component={Challenges} />
                    <Route exact path='/' component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    )
}
