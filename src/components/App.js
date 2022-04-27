import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./Nav"
import Home from "./Home";
import Profil from "./Profil"

function App() {
    
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <div>
                    <Route path="/pages">
                        <Nav/>
                        <Route path="/pages/profil" component={Profil}/>
                    </Route>
                </div>
            </Switch>
        </Router>

    )
}

export default App;