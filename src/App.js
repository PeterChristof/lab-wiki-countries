// src/App.js
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";

function App() {

  return (
 <>   
<div className="App">
  <NavBar />

  <div className="container">
    <div className="row">
    <CountriesList />
    <Switch>
    <Route exact path="/countries" component={CountriesList} />
    <Route exact path="/countries/:alpha3Code" component={CountryDetails} />
    </Switch>
      
    </div>
  </div>
</div>

 </> 
          )
}
export default App;