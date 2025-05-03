import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: 'feed',
    initialState:null,
    reducers : {
        addFeed: (state,action) => {
            return action.payload;
        },
        removeUserFromFeed: (state,action) => {
            const newFeed = state.filter((user)=>{
                return user._id !== action.payload; // to do bug here .....
            })
            return newFeed;
        },

    }
})

export const { addFeed,removeUserFromFeed } = feedSlice.actions;
export default feedSlice.reducer;