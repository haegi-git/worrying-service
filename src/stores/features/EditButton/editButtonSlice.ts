import { createSlice } from "@reduxjs/toolkit";

export const EditButtonSlice = createSlice({
    name : 'editButtonSlice',
    initialState : {
        editTitle: '',
        editContent: '',
        editCategory: 'null'
    },
    reducers:{
        onChangeEditTitle:(state,action)=>{
            state.editTitle = action.payload
        },
        onChangeEditContent:(state,action)=>{
            state.editContent = action.payload
        },
        onChangeEditCategory:(state,action)=>{
            state.editCategory = action.payload
        }
    }
})

export default EditButtonSlice.reducer;
export const {
    onChangeEditTitle,
    onChangeEditContent,
    onChangeEditCategory} = EditButtonSlice.actions