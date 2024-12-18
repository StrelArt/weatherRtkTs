import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {WeatherInfo} from "../../utils/types";
import {fetchWeather} from "../api/asyncWeatherAction.ts";

const initialState: WeatherInfo = {}


const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.fulfilled, (_state, action: PayloadAction<WeatherInfo>) => action.payload)
            .addCase(fetchWeather.rejected, () => ({}))
}
})
export default weatherSlice.reducer

