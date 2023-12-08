import { createSlice } from "@reduxjs/toolkit";
// time complexity to search in array=O(n)
// time complexity to search in object=O(1)
const searchSlice = createSlice({
    name: "search",
    initialState: {

    },
    reducers: {
        cacheResults: (state, action) => {
            // {"ip":["iphone","iphone pro max"]}
            state = { ...action.payload, ...state }
        }
    }
})

export const { cacheResults } = searchSlice.actions
export default searchSlice.reducer