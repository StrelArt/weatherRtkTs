import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {api_key, base_url} from "../../utils/constants.ts";
import {WeatherResponse, WeatherInfo} from "../../utils/types";

export const weatherApi =  createApi({

    baseQuery: fetchBaseQuery({
        baseUrl: base_url
    }),
    keepUnusedDataFor: 3600,
    reducerPath: 'weatherApi',
    endpoints: builder => ({
        getWeatherByCity: builder.query<WeatherInfo, string>({
            query: (city: string) => `?q=${city}&appid=${api_key}&units=metric`,
            transformResponse: (response: WeatherResponse): WeatherInfo => ({
                city: response.name,
                country: response.sys.country,
                temp: response.main.temp,
                pressure: response.main.pressure,
                sunset: response.sys.sunset,
            })
        })
    })

})

export const {useGetWeatherByCityQuery} = weatherApi