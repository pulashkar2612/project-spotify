
import {createSlice} from '@reduxjs/toolkit'
const initialState = []

const songSlice = createSlice({
    name: 'song',
    initialState,
    reducers: {
        add(state, action){
           return action.payload
        //    return {
        //     ...state,
        //     songsList: action.payload,
        //   };
        }
    }
});

export const {add} = songSlice.actions;
export default songSlice.reducer;