import { createSlice } from "@reduxjs/toolkit";

export const SigninStateSlice = createSlice({
    name : 'SigninStateSlice',
    initialState : {
        email: '',
        password: '',
    },
    reducers:{
        onChangeSigninEmail:(state,action)=>{
            state.email = action.payload
        },
        onChangeSigninPassword:(state,action)=>{
            state.password = action.payload
        },
    }
})

export default SigninStateSlice.reducer;
export const {
    onChangeSigninEmail,
    onChangeSigninPassword,} = SigninStateSlice.actions