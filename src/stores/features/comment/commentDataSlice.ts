import { createSlice } from "@reduxjs/toolkit";
import { commentItemType } from "../../../types/dataTypes";

type CommentDataStateSliceType = {
    commentData: commentItemType[]
}

const initialState:CommentDataStateSliceType = {
    commentData: []
}

export const CommentDataSLice = createSlice({
    name : 'CommentDataSLice',
    initialState,
    reducers:{
        setCommentData:(state,action)=>{
            state.commentData = action.payload
        },
        removeCommentData:(state,action)=>{
            const removePostId = action.payload
            state.commentData = state.commentData.filter(comment => comment.id !== removePostId );
        }
    }
})

export default CommentDataSLice.reducer;
export const {
    setCommentData,
    removeCommentData} = CommentDataSLice.actions