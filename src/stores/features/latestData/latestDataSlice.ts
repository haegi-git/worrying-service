import { createSlice } from "@reduxjs/toolkit";
import { postType } from "../../../types/dataTypes";

type latestDataSliceType = {
    anonymousLatest: postType[],
    freeLatest: postType[]
}

const initialState:latestDataSliceType = {
    anonymousLatest: [],
    freeLatest: [],
    
}

export const LatestDataSlice = createSlice({
    name : 'LatestDataSlice',
    initialState,
    reducers:{
        setAnonymousLatestsData:(state,action)=>{
            state.anonymousLatest = action.payload
        },
        setFreeLatestsData:(state,action)=>{
            state.anonymousLatest = action.payload
        },
    }
})

export default LatestDataSlice.reducer;
export const {
    setAnonymousLatestsData,
    setFreeLatestsData} = LatestDataSlice.actions