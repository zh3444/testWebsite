import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../Api";

const Searchbar = () => {
    //used to update state value
    const [search, setSearch] = useState(null);

    //loading dropdown options based on user input
    const loadOptions = (input) => {
        //make GET request to geolocation API with user input as part of input string
        return fetch(
            `${GEO_API_URL}/cities?namePrefix=${input}`,
            geoApiOptions
        )
            //converts response from JSON to javascript object
            .then((response) => response.json())
            //handles data from previous .then clause
            .then((response) => {
                return {
                    //transforms response.data into array of objects
                    //options is predefined naming
                    options: response.data.map((city) => {
                        //each object transformed into value set as string containing lat and long
                        //label set is formatted string with city name and country code
                        //value and label are predefined attributes
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        };
                    }),
                };
            });
    };

    return (
        <AsyncPaginate
            placeholder="Search City"
            //how long component waits after the last keystroke to call loadOptions
            debounceTimeout={1000}
            value={search}
            //when user text input changes
            onChange={(text) => setSearch(text)}
            loadOptions={loadOptions}
        />
    );
};

export default Searchbar;