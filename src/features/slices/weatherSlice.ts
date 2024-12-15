import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {WeatherInfo} from "../../utils/types";

const initialState: WeatherInfo = {
    city: '',
    country: '',
    temp: 0,
    pressure: 0,
    sunset: 0
}


const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        putWeatherInfo: (_state, action: PayloadAction<WeatherInfo>) => action.payload
    }
})

export const {putWeatherInfo} = weatherSlice.actions
export default weatherSlice.reducer