import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name: 'requests',
    initialState:null,
    reducers : {
        addRequests: (state,action) => {
            return action.payload;
        },
        removeRequests: (state,action) => {
            const newAr = state.filter((req)=>{
                return req._id !== action.payload; // to do bug here .....
            })
            return newAr;
        }
    }
})

export const { addRequests,removeRequests } = requestSlice.actions;
export default requestSlice.reducer;