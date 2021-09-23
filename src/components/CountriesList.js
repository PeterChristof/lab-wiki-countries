import React, {useState} from "react";
import countriesJSON from "../countries.json";
import { NavLink } from "react-router-dom";

function CountriesList() {
    const [countries, setCountries] = useState(countriesJSON);

    return (
        <>
            <h3>CountriesList</h3>
        <ul>
            {countries.map((country) => {
                return <li>
                <NavLink exact to={`/countries/${country.alpha3Code}`}>{country.name}</NavLink>
                </li>
            })}
        </ul>
        </>

    )
}

export default CountriesList;