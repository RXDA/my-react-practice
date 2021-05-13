import React, {useEffect, useState} from 'react'
import axios from "axios";

export const SomeAxios = () => {
    const [data, setData] = useState<any>([])

    useEffect(() => {
            const API_URL = 'https://restcountries.eu/rest/v2/all'
            axios.get(API_URL)
                .then((response) => {
                    setData(response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        },[])

    const renderCountries = () => {
        return data.map((country: any) => {
            const languageOrLanguages =
                country.languages.length > 1 ? 'Langauges' : 'Language'
            const formatLanguages = country.languages
                .map((name: any) => name.name)
                .join(', ')
            return (
                <div key={country.name}>
                    <div>
                        {' '}
                        <img src={country.flag} alt={country.name} width='200px'/>{' '}
                    </div>
                    <div>
                        <h1>{country.name}</h1>
                        <p>Capital: {country.capital}</p>
                        <p>
                            {languageOrLanguages}: {formatLanguages}
                        </p>
                        <p>Population: {country.population}</p>
                    </div>
                </div>
            )
        })
    }


    return (
        <div>
            <h1>Fetching Data Using Axios</h1>
            <div>
                <p>There are {data.length} countries in the api</p>
                <div className='countries-wrapper'>{renderCountries()}</div>
            </div>
        </div>
    )
}
