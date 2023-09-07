import { createSlice } from "@reduxjs/toolkit";

export const WriteValueSlice = createSlice({
    name : 'WriteValueSlice',
    initialState : {
        title: '',
        content: '',
        category: ''
    },
    reducers:{
        onChangeTitle:(state,action)=>{
            state.title = action.payload
        },
        onChangeContent:(state,action)=>{
            state.content = action.payload
        },
        onChangeCategory:(state,action)=>{
            state.category = action.payload
        }
    }
})

export default WriteValueSlice.reducer;
export const {
    onChangeTitle,
    onChangeContent,
    onChangeCategory} = WriteValueSlice.actions