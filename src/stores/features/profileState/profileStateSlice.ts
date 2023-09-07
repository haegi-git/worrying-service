import { createSlice } from "@reduxjs/toolkit";

export const ProfileStateSlice = createSlice({
    name : 'ProfileStateSlice',
    initialState : {
        profileUserUid: null,
        profileUserNickname: null,
        profileUserPhoto: null,
        profileUserPhotoFile: undefined,
    },
    reducers:{
        onChangeProfileUserUid:(state,action)=>{
            state.profileUserUid = action.payload
        },
        onChangeProfileUserNickname:(state,action)=>{
            state.profileUserNickname = action.payload
        },
        onChangeProfileUserPhoto:(state,action)=>{
            state.profileUserPhoto = action.payload
        },
        onChangeProfileUserPhotoFile:(state,action)=>{
            state.profileUserPhotoFile = action.payload
        }
    }
})

export default ProfileStateSlice.reducer;
export const {
    onChangeProfileUserUid,
    onChangeProfileUserNickname,
    onChangeProfileUserPhoto,
    onChangeProfileUserPhotoFile} = ProfileStateSlice.actions