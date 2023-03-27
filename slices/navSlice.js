import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    textOrigin: null,
    textDestination: null,
    history: null
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setTextDestination: (state, action) => {
            state.origin = action.payload;
        },
        setHistory: (state, action) => {
            state.origin = action.payload;
        }
    }
})


export const { setOrigin,setTextDestination, setHistory} = navSlice.actions;

// selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectTextDestination = (state) => state.nav.destination;
export const selectHistory = (state) => state.nav.history;

export default navSlice.reducer;