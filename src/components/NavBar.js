import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
    <nav>
       <h1>WikiCountries</h1>
       {/* <ul>
            <li>
                <NavLink activeStyle={{ color: "red" }} exact to="/">CountriesList</NavLink>
            </li>
            <li>
                <NavLink activeStyle={{ color: "red" }} exact to="/">CountriesDetails</NavLink>
            </li>
        </ul> */}
    </nav>

    );
}

export default NavBar;