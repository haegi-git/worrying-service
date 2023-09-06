import { createSlice } from "@reduxjs/toolkit";
import { postType } from "../../../types/dataTypes";

type DataStateSliceType = {
    postsData: postType[]
    totalPosts: number
}

const initialState:DataStateSliceType = {
    postsData: [],
    totalPosts: 0,
}

export const DataStateSlice = createSlice({
    name : 'DataStateSlice',
    initialState,
    reducers:{
        setPostsData:(state,action)=>{
            state.postsData = action.payload
        },
        setTotalPosts:(state,action)=>{
            state.totalPosts = action.payload
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
    setTotalPosts,
    removePostData} = DataStateSlice.actions