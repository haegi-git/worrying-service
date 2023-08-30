import { createSlice } from "@reduxjs/toolkit";

export const JoinButtonSlice = createSlice({
    name : 'joinButtonSlice',
    initialState : {
        email: '',
        nickname: '',
        password: '',
        photoURL: undefined,
    },
    reducers:{
        onChangeEmail:(state,action)=>{
            state.email = action.payload
        },
        onChangeNickname:(state,action)=>{
            state.nickname = action.payload
        },
        onChangePassword:(state,action)=>{
            state.password = action.payload
        },
        onChangePhotoURL:(state,action)=>{
            state.photoURL = action.payload
        }
    }
})

export default JoinButtonSlice.reducer;
export const {
    onChangeEmail,
    onChangeNickname,
    onChangePassword,
onChangePhotoURL} = JoinButtonSlice.actions