import React, { useEffect, useState } from "react";

import countriesJSON from "../countries.json";

function CountryDetails (props) {
    const [country, setCountry] = useState({});
        const [filter, setFilter] = useState("");

    useEffect(() => {
    
        const countryAlphaCode = props.match.params.alpha3Code;
        const foundCountry = countriesJSON.find((country) => country.alpha3Code === countryAlphaCode);
        console.log(foundCountry);
        setCountry(foundCountry);
    }, [props.match.params.alpha3Code]);


useEffect(() => {
    console.log("call an api with the information from the input")
}, [filter, props.match.params.alpha3Code]);

useEffect(() => {
    return () => {
        console.log("Component is unmounting");
    };
},[]);

return (<>
{/* <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} /> */}
{/* <h3>Country Detail: {country.name}</h3> */}
<h3>CountryDetails: {country.name}</h3>
</>);
}


export default CountryDetails;