import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../Api";

const Searchbar = () => {
    const [search, setSearch] = useState(null);

    const loadOptions = (input) => {
        return fetch(
            `${GEO_API_URL}/cities?namePrefix=${input}`,
            geoApiOptions
        )
            .then((response) => response.json())
            .then((response) => {
                return {
                    options: response.data.map((city) => {
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
            debounceTimeout={1000}
            value={search}
            onChange={(text) => setSearch(text)}
            loadOptions={loadOptions}
        />
    );
};

export default Searchbar;