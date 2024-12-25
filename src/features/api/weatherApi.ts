import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {api_key, base_url} from "../../utils/constants.ts";
import {WeatherResponse} from "../../utils/types";

export const weatherApi =  createApi({

    baseQuery: fetchBaseQuery({
        baseUrl: base_url
    }),
    keepUnusedDataFor: 3600*24*30,
    reducerPath: 'weatherApi',
    endpoints: builder => ({
        getWeatherByCity: builder.query<WeatherResponse, string>({
            query: (city: string) => `?q=${city}&appid=${api_key}&units=metric`,
            // keepUnusedDataFor: 3600*24*30,
        })
    })

})

export const {useGetWeatherByCityQuery} = weatherApi