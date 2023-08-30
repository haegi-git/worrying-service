import { createSlice } from "@reduxjs/toolkit";

export const UserStateSlice = createSlice({
    name : 'userStateSlice',
    initialState : {
        userUid: null,
        userNickname: null,
        userPhoto: null
    },
    reducers:{
        onChangeUserUid:(state,action)=>{
            state.userUid = action.payload
        },
        onChangeUserNickname:(state,action)=>{
            state.userNickname = action.payload
        },
        onChangeUserPhoto:(state,action)=>{
            state.userPhoto = action.payload
        }
    }
})

export default UserStateSlice.reducer;
export const {
    onChangeUserUid,
    onChangeUserNickname,
    onChangeUserPhoto} = UserStateSlice.actions