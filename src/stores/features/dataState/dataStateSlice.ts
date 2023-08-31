import { createSlice } from "@reduxjs/toolkit";
import { postType } from "../../../types/dataTypes";

type DataStateSliceType = {
    postsData: postType[]
}

const initialState:DataStateSliceType = {
    postsData: []
}

export const DataStateSlice = createSlice({
    name : 'DataStateSlice',
    initialState,
    reducers:{
        setPostsData:(state,action)=>{
            state.postsData = action.payload
        },
        removePostData:(state,action)=>{
            const removePostId = action.payload
            state.postsData = state.postsData.filter(post => post.id !== removePostId );
        }
    }
})

export default DataStateSlice.reducer;
export const {
    setPostsData,
    removePostData} = DataStateSlice.actions