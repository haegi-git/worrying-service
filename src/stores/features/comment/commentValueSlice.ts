import { createSlice } from "@reduxjs/toolkit";

export const CommentValueSlice = createSlice({
    name : 'commentValueSlice',
    initialState : {
        commentValue: '',
    },
    reducers:{
        onChangeCommentValue:(state,action)=>{
            state.commentValue = action.payload
        },
    }
})

export default CommentValueSlice.reducer;
export const {
    onChangeCommentValue,} = CommentValueSlice.actions