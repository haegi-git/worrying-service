import { createSlice } from "@reduxjs/toolkit";

export const LoginButtonSlice = createSlice({
    name : 'loginButtonSlice',
    initialState : {
        email: '',
        password: '',
    },
    reducers:{
        onChangeLoginEmail:(state,action)=>{
            state.email = action.payload
        },
        onChangeLoginPassword:(state,action)=>{
            state.password = action.payload
        },
    }
})

export default LoginButtonSlice.reducer;
export const {
    onChangeLoginEmail,
    onChangeLoginPassword,} = LoginButtonSlice.actions