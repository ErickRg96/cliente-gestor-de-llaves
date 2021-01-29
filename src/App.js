import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Authenticate from './components/Authenticate'
import GenerateKeys from './components/GenerateKeys'
import Encryption from './components/Encryption'
import Decryption from './components/Decryption'

function App() {
    return (
        <Router>
            <Navbar/>
            <div className="container p-4">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/authenticate" component={Authenticate}/>
                    <Route path="/generate" component={GenerateKeys}/>
                    <Route path="/encryption" component={Encryption}/>
                    <Route path="/decryption" component={Decryption}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

